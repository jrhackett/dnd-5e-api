package daos

import (
	"server/models"
)

type (
	// SpellDAOVersion is an enum used when creating a new dao through the factory
	SpellDAOVersion int

	// SpellDAO persists artist data in database
	SpellDAO struct{}
)

const (
	// RealDB describes a connection to a real DB
	RealDB SpellDAOVersion = iota
	// MockDB describes a connection to a mock DB
	MockDB
)

// NewSpellDAO creates a new SpellDAO
func NewSpellDAO(version SpellDAOVersion) *SpellDAO {
	switch version {
	case RealDB:
		return &SpellDAO{} // TODO change this to real DB connection
	case MockDB:
		return &SpellDAO{}
	}
	return &SpellDAO{}
}

// Get for SpellDAO
func (dao *SpellDAO) Get(id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}
