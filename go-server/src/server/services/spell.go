package services

import (
	"server/app"
	"server/models"
)

// spellDAO specifies the interface of the spell DAO needed by SpellService.
type spellDAO interface {
	// Get returns the artist with the specified spell ID.
	Get(rs app.RequestScope, id int) (*models.Spell, error)
}

// SpellService provides services related with spells.
type SpellService struct {
	dao spellDAO
}

// NewSpellService creates a new SpellService with the given spell DAO.
func NewSpellService(dao spellDAO) *SpellService {
	return &SpellService{dao}
}

func (s SpellService) Get(rs app.RequestScope, id int) (*models.Spell, error) {
	return &models.Spell{}, nil
}
