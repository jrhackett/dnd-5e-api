package test

import (
  "net/http"
  "testing"
)

func TestIndex(t *testing.T) {
  req, _ := http.NewRequest("GET", "/", nil)
  response := executeRequest(req)

  checkResponseCode(t, http.StatusOK, response.Code)

  if body := response.Body.String(); body != "Not yet implemented" {
    t.Errorf("Expected \"Not yet implemented\". Got %s", body)
  }
}
