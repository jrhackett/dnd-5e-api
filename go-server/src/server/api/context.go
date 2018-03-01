package api

import "server/api/connections"

type Context struct {
	DB connections.DatabaseConnection
}
