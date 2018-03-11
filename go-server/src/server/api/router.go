package api

import (
	"net/http"

	"github.com/gorilla/mux"
)

// NewRouter creates a new router
func NewRouter(context Context) *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	// TODO make index serve static files from the client bundle
	router.Methods("GET").Path("/").Name("Index").HandlerFunc(context.Index)

	router.Methods("GET").Path("/spells").Name("Get Spells").HandlerFunc(context.GetSpells)
	router.Methods("GET").Path("/spellbooks").Name("Get Spellbooks").HandlerFunc(context.GetSpellbooks)
	router.Methods("GET").Path("/user").Name("Get User").Handler(authHandler(http.HandlerFunc(context.GetUser)))

	return router
}
