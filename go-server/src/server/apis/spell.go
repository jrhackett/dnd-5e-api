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
}

func (s *spellResource) get(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.ParseInt(r.URL.Query().Get("id"), 10, 0)
	spells, _ := s.service.Get(int(id))
	payload, _ := json.Marshal(spells)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(payload))
}
