package apis

import (
	"net/http"
	"server/daos"
	"testing"
)

func TestSimpleMockGetSpells(t *testing.T) {
	req, _ := http.NewRequest("GET", "/api/v1/spells", nil)
	response := executeRequest(req, daos.MockDB)

	checkResponseCode(t, http.StatusOK, response.Code)

	assertEqual(t, response.Body.String(), "[]")
}
