package api

import "api/connections"

type Context struct {
  DB connections.DatabaseConnection
}
