package account

import (
	"app/internal/db"
	"github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
)

type Model struct {
	tableName         struct{} `sql:"account"`
	Id                string   `sql:",pk"`
	ExternalAccountId string
	FirstName         string
	LastName          string
	Enabled           bool
	GlobalRoles       []string `sql:",array"`
}

type Roles struct {
	tableName      struct{} `sql:"account_role"`
	Id             string   `sql:",pk"`
	AccountId      string
	OrganizationId string
	Roles          []string `sql:",array"`
}

func New(externalAccountId string) Model {
	return Model{
		Id:                db.NewUUID(),
		ExternalAccountId: externalAccountId,
		Enabled:           true,
	}
}

func (m Model) Validate() error {
	return validation.ValidateStruct(&m,
		validation.Field(&m.Id, validation.Required, is.UUIDv4),
		validation.Field(&m.ExternalAccountId, validation.Required, validation.Length(28, 28)),
		validation.Field(&m.FirstName, validation.Required, validation.Length(1, 255)),
		validation.Field(&m.LastName, validation.Required, validation.Length(1, 255)),
	)
}
