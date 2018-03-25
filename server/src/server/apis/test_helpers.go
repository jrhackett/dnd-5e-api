package apis

import (
	"net/http"
	"net/http/httptest"
	"server/daos"
	"server/services"
	"testing"

	"github.com/gorilla/mux"
)

func executeRequest(req *http.Request) *httptest.ResponseRecorder {
	rr := httptest.NewRecorder()
	router := mux.NewRouter().StrictSlash(true)
	spellDao, _ := daos.NewSpellDAO(daos.RealDB)
	ServeSpellResource(router, services.NewSpellService(spellDao))
	router.ServeHTTP(rr, req)

	return rr
}

func checkResponseCode(t *testing.T, expected, actual int) {
	if expected != actual {
		t.Errorf("Expected response code %d. Got %d\n", expected, actual)
	}
}

func assertEqual(t *testing.T, a interface{}, b interface{}) {
	if a != b {
		t.Fatalf("%s != %s", a, b)
	}
}
