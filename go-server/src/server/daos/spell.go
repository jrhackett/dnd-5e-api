package daos

import (
	"errors"
	"server/models"
)

type (
	// SpellDAOVersion is an enum used when creating a new dao through the factory
	SpellDAOVersion int

	// SpellDAO describes a spell dao
	SpellDAO interface {
		Get(id int) (*models.Spell, error)
	}

	// DBSpellDAO persists spell data in database
	DBSpellDAO struct{}

	// MockSpellDAO mocks spell data
	MockSpellDAO struct{}
)

const (
	// RealDB describes a connection to a real DB
	RealDB SpellDAOVersion = iota
	// MockDB describes a connection to a mock DB
	MockDB
)

// NewSpellDAO creates a new SpellDAO
func NewSpellDAO(version SpellDAOVersion) (SpellDAO, error) {
	switch version {
	case RealDB:
		return &DBSpellDAO{}, nil
	case MockDB:
		return &MockSpellDAO{}, nil
	}
	return nil, errors.New("DAO version not implemented")
}

// Get for DBSpellDAO
// TODO change this to real DB connection
func (dao *DBSpellDAO) Get(id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}

// Get for MockSpellDAO
func (dao *MockSpellDAO) Get(id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}
