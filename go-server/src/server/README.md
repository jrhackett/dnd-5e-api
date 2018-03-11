# D&D 5e Spells Server

This is the spells server written in Go.

Disclaimer: This server is very much a work in progress right now.

# Hacking

1. Clone the project and make sure your `$GOPATH` is set up properly. 
2. You'll need to create a `.env` file in the `server` folder to hold some important information.
** This only includes `PORT` right now but will be extended soon to hold information about database connections and auth.

* To test: `go test ./...`
* To build: `go build -o main`
** To run: `./main` 
