package main

import (
	"app/admin"
	"app/internal/db"
	"app/public"
	"encoding/gob"
	"errors"
	_ "github.com/go-pg/pg/orm"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"html/template"
	"io"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"
)

// Define the template registry struct
type TemplateRegistry struct {
	templates map[string]*template.Template
}

// Implement e.Renderer interface
func (t *TemplateRegistry) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	tmpl, ok := t.templates[name]
	if !ok {
		err := errors.New("Template not found -> " + name)
		return err
	}
	return tmpl.ExecuteTemplate(w, "layout", data)
}

func main() {
	feDistDir := os.Getenv("FRONTEND_DIST_DIR")
	if feDistDir == "" {
		log.Fatalf("FRONTEND_DIST_DIR needs to be set")
	}

	err := public.WriteFirebaseCredentialFile()
	if err != nil {
		log.Fatalf(err.Error())
	}

	rand.Seed(time.Now().UnixNano())
	db := db.InitDatabase()
	defer db.Close()

	log.Printf("Starting application (%s)", feDistDir)

	e := echo.New()
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(session.Middleware(sessions.NewFilesystemStore("", []byte("scheduling-key"))))

	e.Renderer = NewTemplateRegistry()

	// public page css
	e.GET("/public/css/*", echo.WrapHandler(http.StripPrefix("/public/css/", http.FileServer(http.Dir(feDistDir)+"/assets/css/"))))
	e.GET("/public/img/*", echo.WrapHandler(http.StripPrefix("/public/img/", http.FileServer(http.Dir(feDistDir)+"/assets/img/"))))

	// public page routes
	gob.Register(public.FlashMessage{})
	e.GET("/", public.IndexHandler)
	e.GET("/login", public.LoginHandler)
	e.POST("/login", public.LoginPostHandler)
	e.GET("/logout", public.LogoutHandler)

	e.GET("/register", public.RegisterHandler)
	e.POST("/register", public.RegisterPostHandler)

	// load angular app
	angularFileHandler := echo.WrapHandler(http.StripPrefix("/admin/", http.FileServer(http.Dir(feDistDir))))
	e.GET("/admin/*", admin.UserAuthenticatedHtml(angularFileHandler, "",""))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	e.Logger.Fatal(e.Start(":" + port))

	//r := mux.NewRouter()

	// public routes
	/*
	r.HandleFunc("/", public.IndexHandler)
	r.HandleFunc("/login", public.LoginHandler)

	r.PathPrefix("/public/css/").Handler(http.StripPrefix("/public/css/", http.FileServer(http.Dir(feDistDir)+"/assets/css/")))
	*/
}

func NewTemplateRegistry() *TemplateRegistry {
	publicBaseTemplates := []string{"public/templates/layout.html", "public/templates/navigation.html", "public/templates/footer.html"}
	templates := make(map[string]*template.Template)
	templates["index.html"] = template.Must(template.ParseFiles(append(publicBaseTemplates, "public/templates/index.html")...))
	templates["login.html"] = template.Must(template.ParseFiles(append(publicBaseTemplates, "public/templates/login.html")...))
	templates["register.html"] = template.Must(template.ParseFiles(append(publicBaseTemplates, "public/templates/register.html")...))

	return &TemplateRegistry{
		templates: templates,
	}
}

func Sum(a int, b int) int {
	return a + b
}
