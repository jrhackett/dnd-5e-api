package api

import "server/api/connections"

// Context describes the context in which the app is running
// This helps us mock different connections for testing different situations
type Context struct {
	DB connections.DatabaseConnection
}
