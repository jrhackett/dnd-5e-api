package services

import (
	"server/daos"
	"server/models"
)

type (
	// SpellService provides services related with spells.
	SpellService struct{ dao daos.SpellDAO }
)

// NewSpellService creates a new SpellService with the given spell DAO.
func NewSpellService(dao daos.SpellDAO) *SpellService {
	return &SpellService{dao}
}

// Get for SpellService
func (s SpellService) Get(id int) (*models.Spell, error) {
	return s.dao.Get(id)
}
