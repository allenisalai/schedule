package main

import (
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"log"
	"net/http"
)

/* @todo set session key with env variable */
var store = sessions.NewCookieStore([]byte("scheduling-key"))

func main() {
	log.Println("Starting application")
	r := mux.NewRouter()

	r.HandleFunc("/", helloWorld)
	r.PathPrefix("/admin/").Handler(http.StripPrefix("/admin/", http.FileServer(http.Dir("./fe/dist"))))

	log.Fatal(http.ListenAndServe(":8080", r))
}

func helloWorld(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`hello`))
}
