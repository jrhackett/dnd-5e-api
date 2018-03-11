package api

import "server/api/connections"

var SimpleContext = Context{
	DB: connections.MockDBConnection{},
}
