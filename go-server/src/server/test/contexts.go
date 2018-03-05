package test

import (
	"server/api"
	"server/api/connections"
)

var SimpleContext = api.Context{
	DB: connections.MockDBConnection{},
}
