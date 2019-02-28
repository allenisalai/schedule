package main

import (
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"log"
	"net/http"
	"os"
)

/* @todo set session key with env variable */
var store = sessions.NewCookieStore([]byte("scheduling-key"))

func main() {
	feDistDir := os.Getenv("FRONTEND_DIST_DIR")
	if feDistDir == "" {
		log.Fatalf("FRONTEND_DIST_DIR needs to be set")
	}

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
	w.Write([]byte(`hello`))
}

func Sum(a int, b int) int {
	return a + b
}