package main_test

import (
  "net/http"
  "net/http/httptest"
  "testing"

  "go-rest-api-example/api"
)

func TestIndex(t *testing.T) {
  req, _ := http.NewRequest("GET", "/", nil)
  response := executeRequest(req)

  checkResponseCode(t, http.StatusOK, response.Code)

  if body := response.Body.String(); body != "Hello" {
    t.Errorf("Expected \"Hello\". Got %s", body)
  }
}

func executeRequest(req *http.Request) *httptest.ResponseRecorder {
  rr := httptest.NewRecorder()
  api.NewRouter().ServeHTTP(rr, req)

  return rr
}

func checkResponseCode(t *testing.T, expected, actual int) {
  if expected != actual {
    t.Errorf("Expected response code %d. Got %d\n", expected, actual)
  }
}
