package organization

import (
	"app/internal/db"
	"github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
)

type Model struct {
	tableName struct{} `sql:"organization"`
	Id        string   `sql:",pk"`
	Name      string
}

func New(name string) Model {
	return Model{
		Id:   db.NewUUID(),
		Name: name,
	}
}

func (m Model) Validate() error {
	return validation.ValidateStruct(&m,
		validation.Field(&m.Id, validation.Required, is.UUIDv4),
		validation.Field(&m.Name, validation.Required, validation.Length(1, 255)),
	)
}
