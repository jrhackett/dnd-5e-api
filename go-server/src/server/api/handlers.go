package api

import (
	"fmt"
	"net/http"
	"os"

	"github.com/auth0-community/auth0"
	jose "gopkg.in/square/go-jose.v2"
)

func authHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		secret := []byte(os.Getenv("AUTH_SECRET"))
		secretProvider := auth0.NewKeyProvider(secret)
		audience := []string{os.Getenv("AUTH_AUDIENCE")}

		configuration := auth0.NewConfiguration(secretProvider, audience, os.Getenv("AUTH_ISSUER"), jose.HS256)
		validator := auth0.NewValidator(configuration)

		token, err := validator.ValidateRequest(r)

		if err != nil {
			fmt.Println(err)
			fmt.Println("Token is not valid:", token)
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
		} else {
			next.ServeHTTP(w, r)
		}
	})
}
