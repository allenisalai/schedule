package public

import (
	"app/internal/account"
	"app/internal/db"
	"app/internal/organization"
	"github.com/go-pg/pg"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"log"
	"net/http"
	"strings"
)

type registerView struct {
	Csrf              string   `form:"csrf"` /* @todo implement csrf */
	ExternalAccountId string   `form:"external_account_id"`
	FirstName         string   `form:"first_name"`
	LastName          string   `form:"last_name"`
	Organization      string   `form:"organization"`
	Errors            []string `form:"-"`
}

func RegisterHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "register.html", registerView{})
}

func RegisterPostHandler(c echo.Context) error {
	reqView := new(registerView)
	if err := c.Bind(reqView); err != nil {
		log.Println(err)
		reqView.Errors = append(reqView.Errors, err.Error())
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	uuid.New()
	acc := account.New(reqView.ExternalAccountId)
	acc.FirstName = reqView.FirstName
	acc.LastName = reqView.LastName

	err := acc.Validate()
	if err != nil {
		reqView.Errors = strings.Split(err.Error(), ";")
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	org := organization.New(reqView.Organization)
	err = org.Validate()
	if err != nil {
		reqView.Errors = strings.Split(err.Error(), ";")
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	accRep := account.NewRepository(db.GetDb())
	m, err := accRep.FindOneBy(map[string]interface{}{"external_account_id": acc.ExternalAccountId})
	if err != nil {
		reqView.Errors = append(reqView.Errors, err.Error())
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	if m != nil {
		reqView.Errors = append(reqView.Errors, "An account already exists.  Please login.")
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	err = db.GetDb().RunInTransaction(func(tx *pg.Tx) error {
		err = accRep.Create(&acc)
		if err != nil {
			return err
		}

		orgRep := organization.NewRepository(db.GetDb())
		err = orgRep.Create(&org)

		if err != nil {
			return err
		}

		err = accRep.SetRoles(acc, org.Id, []string{"ROLE_OWNER"})
		if err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		reqView.Errors = append(reqView.Errors, err.Error())
		return c.Render(http.StatusOK, "register.html", reqView)
	}

	err = setAccountIdInSession(acc, c)

	return c.Redirect(301, "/admin/")
}

