package api

import "server/api/connections"

// SimpleContext is a baseline connection used to mock simple DB function
var SimpleContext = Context{
	DB: connections.MockDBConnection{},
}
