package main

import (
  "log"
  "net/http"

  "github.com/alexsasharegan/dotenv"
  "server/api"
)

func main() {
  err := dotenv.Load()
  if err != nil {
    log.Fatalf("Error loading .env file: %v", err)
  }

  router := api.NewRouter(api.Context{})
  log.Fatal(http.ListenAndServe(":8080", router))
}
