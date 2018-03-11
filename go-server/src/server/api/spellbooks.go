package api

import (
	"encoding/json"
	"net/http"
)

// GetSpellbooks returns spellbooks that match query params
func (context Context) GetSpellbooks(w http.ResponseWriter, r *http.Request) {
	spellbooks := context.DB.GetSpellbooks()
	payload, _ := json.Marshal(spellbooks)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(payload))
}
