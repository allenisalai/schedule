package public

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func IndexHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "index.html", "")
}
