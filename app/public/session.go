package public

import (
	"app/internal/account"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
)

const SESSION_KEY = "session"

const FLASH_SUCCESS = "success"
const FLASH_ERROR = "danger"
const FLASH_WARNING = "warning"
const FLASH_INFO = "info"

type FlashMessage struct {
	Msg     string
	MsgType string
}

func setAccountIdInSession(acc account.Model, c echo.Context) error {
	sess, err := GetSession(c)
	if err != nil {
		return err
	}
	sess.Values["account_id"] = acc.Id
	return sess.Save(c.Request(), c.Response())
}

func GetSession(c echo.Context) (*sessions.Session, error) {
	return session.Get(SESSION_KEY, c)
}

func AddSuccessFlash(s *sessions.Session, m string) {
	s.AddFlash(FlashMessage{
		Msg:     m,
		MsgType: FLASH_SUCCESS,
	})
}

func AddErrorFlash(s *sessions.Session, m string) {
	s.AddFlash(FlashMessage{
		Msg:     m,
		MsgType: FLASH_ERROR,
	})
}

func AddWarningFlash(s *sessions.Session, m string) {
	s.AddFlash(FlashMessage{
		Msg:     m,
		MsgType: FLASH_WARNING,
	})
}

func AddInfoFlash(s *sessions.Session, m string) {
	s.AddFlash(FlashMessage{
		Msg:     m,
		MsgType: FLASH_INFO,
	})
}