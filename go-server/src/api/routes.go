package api

import "github.com/gorilla/mux"

func NewRouter(context Context) *mux.Router {
  router := mux.NewRouter().StrictSlash(true)

  router.Methods("GET").Path("/").Name("Index").HandlerFunc(context.Index)
  router.Methods("GET").Path("/spells").Name("Get Spells").HandlerFunc(context.GetSpells)

  return router
}
