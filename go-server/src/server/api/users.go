package api

import (
	"fmt"
	"net/http"
)

// GetUser returns the user based on the request
func (context Context) GetUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Not yet implemented")
}
