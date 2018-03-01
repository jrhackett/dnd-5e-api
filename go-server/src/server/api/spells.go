package api

import (
	"fmt"
	"net/http"
)

// GetSpells returns spells that match query params
func (context Context) GetSpells(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Not yet implemented")
}
