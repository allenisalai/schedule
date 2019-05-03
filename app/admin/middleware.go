package admin

import (
	"app/public"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
	"net/http"
	"net/url"
)

func UserAuthenticatedHtml(next echo.HandlerFunc, msg string, redirectLocation string) echo.HandlerFunc {

	if redirectLocation == "" {
		redirectLocation = "/login"
	}

	if msg == "" {
		msg = "Please login."
	}

	return func(c echo.Context) error {
		s, err := public.GetSession(c)

		if err != nil {
			log.Error(err)
			return err
		}

		s.AddFlash(msg)
		url := url.URL{Path:redirectLocation}

		if !isUserAuthenticated(c) {
			return c.Redirect(http.StatusFound, url.String())
		}

		return next(c)
	}
}

func isUserAuthenticated(c echo.Context) bool {
	sess, _ := session.Get("session", c)
	_, ok := sess.Values["account_id"]

	return ok
}