package test

import (
	"net/http"
	"testing"
)

func TestIndex(t *testing.T) {
	req, _ := http.NewRequest("GET", "/", nil)
	response := executeRequest(req, SimpleContext)

	checkResponseCode(t, http.StatusOK, response.Code)

	assertEqual(t, response.Body.String(), "Not yet implemented")
}
