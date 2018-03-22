# D&D 5e Spells Server

This is the spells server written in Go.

Disclaimer: This server is very much a work in progress right now.

## Project Structure

The main entrypoint for the server is `main.go`.

* `apis` is the router layer that sets up all the HTTP routes with their corresponding services
* `app` holds all app-wide code such as middleware, logging, and versioning
* `daos` contains the data access objects for interactions with persistent storage
* `models` contains all the data structures needed to communicate between layers
* `services` contains the business logic behind each route

## Hacking

1. Clone the project and make sure your `$GOPATH` is set up properly. 
2. You'll need to create a `.env` file in the `server` folder to hold some important information.
** This only includes `PORT` right now but will be extended soon to hold information about database connections and auth.

* To test: `go test ./...`
* To build: `go build -o main`
* To run: `./main` 
