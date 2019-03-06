package main

import (
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"log"
	"net/http"
	"os"
	"github.com/go-pg/pg"
	_ "github.com/go-pg/pg/orm"
)

/* @todo set session key with env variable */
var store = sessions.NewCookieStore([]byte("scheduling-key"))

type Client struct {
	tableName struct{} `sql:"client"`
	Id string
	FirstName string
	LastName string
}
 var db *pg.DB

func main() {
	feDistDir := os.Getenv("FRONTEND_DIST_DIR")
	if feDistDir == "" {
		log.Fatalf("FRONTEND_DIST_DIR needs to be set")
	}

	db = initDatabase()
	defer db.Close()

	c := &Client{}
	db.Query(c, "SELECT * FROM client limit 1")


	log.Printf("Starting application (%s)", feDistDir)
	r := mux.NewRouter()

	r.HandleFunc("/", helloWorld)
	r.PathPrefix("/admin/").Handler(http.StripPrefix("/admin/", http.FileServer(http.Dir(feDistDir))))
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Fatal(http.ListenAndServe(":" + port, r))
}

func helloWorld(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`hello world`))
}

func Sum(a int, b int) int {
	return a + b
}

func initDatabase() *pg.DB {
	dbOpts, err := pg.ParseURL(os.Getenv("DATABASE_URL"))

	if err != nil {
		panic(err)
	}

	db := pg.Connect(dbOpts)

	return db
}