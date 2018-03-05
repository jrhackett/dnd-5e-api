package test

import (
	"net/http"
	"testing"
)

func TestSimpleGetSpells(t *testing.T) {
	req, _ := http.NewRequest("GET", "/spells", nil)
	response := executeRequest(req, SimpleContext)

	checkResponseCode(t, http.StatusOK, response.Code)

	assertEqual(t, response.Body.String(), "[]")
}
