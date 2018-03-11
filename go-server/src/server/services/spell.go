package services

import "server/models"

type (
	// spellDAO specifies the interface of the spell DAO needed by SpellService.
	spellDAO interface {
		// Get returns the artist with the specified spell ID.
		Get(id int) (*models.Spell, error)
	}

	// SpellService provides services related with spells.
	SpellService struct{ dao spellDAO }
)

// NewSpellService creates a new SpellService with the given spell DAO.
func NewSpellService(dao spellDAO) *SpellService {
	return &SpellService{dao}
}

// Get for SpellService
func (s SpellService) Get(id int) (*models.Spell, error) {
	return s.dao.Get(id)
}
