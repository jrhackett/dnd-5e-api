package api

import (
  "net/http"

  "github.com/gorilla/mux"
)

type Route struct {
  name    string
  method  string
  pattern string
  handler http.HandlerFunc
}

type Routes []Route

func NewRouter(context Context) *mux.Router {
  router := mux.NewRouter().StrictSlash(true)

  router.Methods("GET").Path("/").Name("Index").Handler(context.Index)
  router.Methods("GET").Path("/spells").Name("Get Spells").Handler(context.GetSpells)

  return router
}
