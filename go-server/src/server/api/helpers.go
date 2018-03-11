package api

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func executeRequest(req *http.Request, context Context) *httptest.ResponseRecorder {
	rr := httptest.NewRecorder()
	NewRouter(context).ServeHTTP(rr, req)

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
