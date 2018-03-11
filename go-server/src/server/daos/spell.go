package daos

import (
	"server/models"
)

// SpellDAO persists artist data in database
type SpellDAO struct{}

// NewSpellDAO creates a new SpellDAO
func NewSpellDAO() *SpellDAO {
	return &SpellDAO{}
}

func (dao *SpellDAO) Get(id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}
