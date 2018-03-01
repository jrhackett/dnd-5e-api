package api

import (
	"fmt"
	"net/http"
)

// Index returns info about the API
func (context Context) Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Not yet implemented")
}
