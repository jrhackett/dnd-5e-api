package main

import (
  "log"
  "net/http"

  "go-rest-api-example/api"
)

func main() {
  router := api.NewRouter()
  log.Fatal(http.ListenAndServe(":8080", router))
}
