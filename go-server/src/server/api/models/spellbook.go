package models

// Spellbook describes a collection of spells made by a user
type Spellbook struct {
	Name string `json:"name"`
}

// Spellbooks is a collection of Spellbook structs
type Spellbooks []Spellbook
