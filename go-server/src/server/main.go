package main

import (
	"log"
	"net/http"
	"server/apis"
	"server/daos"
	"server/services"

	"github.com/alexsasharegan/dotenv"
	"github.com/gorilla/mux"
)

func main() {
	err := dotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	router := mux.NewRouter().StrictSlash(true)

	apis.ServeSpellResource(router, *services.NewSpellService(daos.NewSpellDAO()))

	log.Fatal(http.ListenAndServe(":8080", router))
}
