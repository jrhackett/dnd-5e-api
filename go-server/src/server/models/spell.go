package models

type (
	// Spell describes a spell
	Spell struct {
		Name          string   `json:"name,omitempty"`
		Level         string   `json:"level,omitempty"`
		School        string   `json:"school,omitempty"`
		Classes       []string `json:"classes,omitempty"`
		AtHigherLevel string   `json:"athigherlevel,omitempty"`
		CastingTime   string   `json:"casting_time,omitempty"`
		Components    string   `json:"components,omitempty"`
		Concentration string   `json:"concentration,omitempty"`
		Description   string   `json:"description,omitempty"`
		Duration      string   `json:"duration,omitempty"`
		EE            string   `json:"ee,omitempty"`
		ID            string   `json:"id,omitempty"`
		Page          string   `json:"page,omitempty"`
		Range         string   `json:"range,omitempty"`
		Ritual        string   `json:"ritual,omitempty"`
		Scag          string   `json:"scag,omitempty"`
		Slug          string   `json:"slug,omitempty"`
		Source        string   `json:"source,omitempty"`
		UniqueID      string   `json:"_id,omitempty"`
	}

	// Spells is an array of Spell structs
	Spells []Spell
)
