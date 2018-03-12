package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
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

	spellDao, _ := daos.NewSpellDAO(daos.MockDB)

	apis.ServeSpellResource(router, services.NewSpellService(spellDao))

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", os.Getenv("PORT")), router))
}
