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

func NewRouter() *mux.Router {
  router := mux.NewRouter().StrictSlash(true)
  for _, route := range routes {
    router.Methods(route.method).Path(route.pattern).Name(route.name).Handler(route.handler)
  }

  return router
}

var routes = Routes{
  Route{
    "index",
    "GET",
    "/",
    Index,
  },
}
