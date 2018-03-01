package main

import (
	"log"
	"net/http"

	"server/api"
	"server/api/connections"

	"github.com/alexsasharegan/dotenv"
)

func main() {
	err := dotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	log.Fatal(http.ListenAndServe(":8080", api.NewRouter(api.Context{
		DB: connections.MockDBConnection{},
	})))
}
