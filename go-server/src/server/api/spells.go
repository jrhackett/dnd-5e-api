package api

import (
	"encoding/json"
	"net/http"
)

// GetSpells returns spells that match query params
func (context Context) GetSpells(w http.ResponseWriter, r *http.Request) {
	spells := context.DB.GetSpells()
	payload, _ := json.Marshal(spells)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(payload))
}
