package apis

import (
	"net/http"
	"testing"
)

func TestSimpleGetSpells(t *testing.T) {
	req, _ := http.NewRequest("GET", "/api/v1/spells", nil)
	response := executeRequest(req)

	checkResponseCode(t, http.StatusOK, response.Code)

	assertEqual(t, response.Body.String(), "[]")
}
