package api

import (
  "fmt"
  "net/http"
)

func (context Context) Index(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Not yet implemented")
}

func (context Context) GetSpells(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Not yet implemented")
}
