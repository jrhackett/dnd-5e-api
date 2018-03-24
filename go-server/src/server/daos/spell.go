package daos

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"os"
	"server/models"

	_ "github.com/lib/pq"
)

type (
	// SpellDAOVersion is an enum used when creating a new dao through the factory
	SpellDAOVersion int

	// SpellDAO describes a spell dao
	SpellDAO interface {
		Get(id int) (*models.Spells, error)
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
func (dao *DBSpellDAO) Get(id int) (*models.Spells, error) {
	spells := models.Spells{}
	db, err := sql.Open("postgres", os.Getenv("DATABASE_CONNECTION_STRING"))

	if err != nil {
		log.Fatal(err)
	}

	rows, err := db.Query("SELECT * FROM spells;")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		var spell models.Spell
		if err := rows.Scan(&spell.ID, &spell.Name, &spell.School, &spell.Level, &spell.Ritual, &spell.CastingTime, &spell.Source, &spell.Range, &spell.Classes, &spell.Components, &spell.Duration, &spell.AtHigherLevel, &spell.Concentration, &spell.Slug, &spell.Page, &spell.Description); err != nil {
			log.Fatal(err)
		}
		spells = append(spells, spell)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%+v\n", spells[0])

	return &spells, nil
}

// Get for MockSpellDAO
func (dao *MockSpellDAO) Get(id int) (*models.Spells, error) {
	return &models.Spells{}, nil
}
