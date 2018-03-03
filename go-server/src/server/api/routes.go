package api

import (
	"net/http"

	"github.com/gorilla/mux"
)

func NewRouter(context Context) *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	// TODO add auth handler to these
	router.Methods("GET").Path("/").Name("Index").HandlerFunc(context.Index)
	router.Methods("GET").Path("/spells").Name("Get Spells").HandlerFunc(context.GetSpells)
	router.Methods("GET").Path("/user").Name("Get User").Handler(authHandler(http.HandlerFunc(context.GetUser)))

	return router
}
