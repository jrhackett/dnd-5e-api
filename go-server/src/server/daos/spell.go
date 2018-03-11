package daos

import (
	"server/models"
)

type SpellDAOVersion int

const (
	RealDB SpellDAOVersion = iota
	MockDB
)

// SpellDAO persists artist data in database
type SpellDAO struct{}

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

func (dao *SpellDAO) Get(id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}
