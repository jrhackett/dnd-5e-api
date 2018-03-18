package apis

import (
	"encoding/json"
	"net/http"
	"server/services"
	"strconv"

	"github.com/gorilla/mux"
)

type (
	// spellResource defines the handlers for the CRUD APIs.
	spellResource struct {
		service services.SpellService
	}
)

// ServeSpellResource sets up routes for the spell service
func ServeSpellResource(router *mux.Router, service services.SpellService) {
	r := &spellResource{service}
	router.Methods("GET").Path("/spells").Name("Get Spell").HandlerFunc(r.get)
	router.Methods("POST").Path("/spells").Name("Post Spell").HandlerFunc(r.post)
	router.Methods("PUT").Path("/spells").Name("Put Spell").HandlerFunc(r.put)
	router.Methods("DELETE").Path("/spells").Name("Delete Spell").HandlerFunc(r.delete)
}

func (s *spellResource) get(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.ParseInt(r.URL.Query().Get("id"), 10, 0)
	spells, _ := s.service.Get(int(id))
	payload, _ := json.Marshal(spells)
	sendResponse(w, "application/json", payload)
}

func (s *spellResource) post(w http.ResponseWriter, r *http.Request) {
	sendResponse(w, "application/json", []byte("Not yet implemented"))
}

func (s *spellResource) put(w http.ResponseWriter, r *http.Request) {
	sendResponse(w, "application/json", []byte("Not yet implemented"))
}

func (s *spellResource) delete(w http.ResponseWriter, r *http.Request) {
	sendResponse(w, "application/json", []byte("Not yet implemented"))
}
