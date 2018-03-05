package connections

import "server/api/models"

// DatabaseConnection is an interface for connecting to some database
type DatabaseConnection interface {
	GetSpells() models.Spells
}

// MockDBConnection is a based struct for mocking out DB connection in tests
type MockDBConnection struct {
}

// GetSpells for MockDBConnection
func (m MockDBConnection) GetSpells() models.Spells {
	return models.Spells{}
}
