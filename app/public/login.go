package public

import (
	"app/internal/account"
	"app/internal/db"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
	"github.com/pkg/errors"
	"net/http"
)

func LoginHandler(c echo.Context) error {
	s, err := GetSession(c)

	if err != nil {
		log.Error(err)
	}
	flashes := s.Flashes()
	s.Save(c.Request(), c.Response())

	return c.Render(http.StatusOK, "login.html", flashes)
}

func LoginPostHandler(c echo.Context) error {
	sess, err := GetSession(c)
	if err != nil {
		log.Error(errors.Wrap(err, "Login form parse failed."))
		return err
	}

	err = c.Request().ParseForm()
	if err != nil {
		log.Error(errors.Wrap(err, "Login form parse failed."))
		AddErrorFlash(sess, "Unexpected Error occurred")
		err := sess.Save(c.Request(), c.Response())
		if err != nil {
			return err
		}
		return c.Redirect(301, "/login")
	}
	idToken := c.Request().PostFormValue("id_token")
	token, err := verifyIdToken(idToken)
	if err != nil {
		log.Error(errors.Wrap(err, "Unable to decode idToken"))
		AddErrorFlash(sess, "Login failed unexpectedly")
		err := sess.Save(c.Request(), c.Response())
		if err != nil {
			return err
		}
		return c.Redirect(301, "/login")
	}

	accRep := account.NewRepository(db.GetDb())
	acc, err := accRep.FindOneBy(map[string]interface{}{"external_account_id": token.UID})
	if err != nil {
		log.Error(errors.Wrap(err, ""))
		AddErrorFlash(sess, "Login failed unexpectedly")
		err := sess.Save(c.Request(), c.Response())
		if err != nil {
			return err
		}
		return c.Redirect(301, "/login")
	}

	if acc == nil {
		AddErrorFlash(sess, "No account found")
		err := sess.Save(c.Request(), c.Response())
		if err != nil {
			return err
		}
		return c.Redirect(301, "/login")
	}

	err = setAccountIdInSession(*acc, c)
	if err != nil {
		log.Error(errors.Wrap(err, "Unable to add account to session"))
		AddErrorFlash(sess, "Login failed unexpectedly")
		err := sess.Save(c.Request(), c.Response())
		if err != nil {
			return err
		}
		return c.Redirect(301, "/login")
	}

	return c.Redirect(301, "/admin/")
}

func LogoutHandler(c echo.Context) error {
	sess, err := session.Get("session", c)
	if err != nil {
		log.Error(errors.Wrap(err, "Couldn't retrieve session from context."))
	}

	delete(sess.Values, "account_id")
	AddInfoFlash(sess, "Logged out successfully")

	err = sess.Save(c.Request(), c.Response())
	if err != nil {
		log.Error(errors.Wrap(err, "Couldn't save session on logout"))
	}

	return c.Redirect(301, "/login")
}
