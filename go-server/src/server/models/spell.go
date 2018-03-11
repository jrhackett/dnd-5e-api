package models

// Spell describes a spell
type Spell struct {
	Name string `json:"name"`
}

// Spells is an array of Spell structs
type Spells []Spell
