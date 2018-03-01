package connections

type DatabaseConnection interface {
	GetSpells() string
}

type MockDBConnection struct {
}

func (m MockDBConnection) GetSpells() string {
	return ""
}
