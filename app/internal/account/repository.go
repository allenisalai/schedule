package account

import (
	"app/internal/db"
	"github.com/go-pg/pg"
)

type Repository struct {
	db *pg.DB
}

func NewRepository(db *pg.DB) *Repository {
	return &Repository{
		db: db,
	}
}

func (r *Repository) Create(acc *Model) error {
	return db.GetDb().Insert(acc)
}

func (r *Repository) Find(id string) (*Model, error) {
	account := new(Model)
	_, err := r.db.QueryOne(account, "SELECT * FROM account WHERE id = ?", id)

	if err == pg.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return account, nil
}

func (r *Repository) FindBy(search map[string]interface{}) ([]Model, error) {
	var accounts []Model
	q := r.db.Model(accounts)

	for k, v := range search {
		q.Where(k+" = ?", v)
	}

	err := q.Select()

	return accounts, err
}

func (r *Repository) FindOneBy(search map[string]interface{}) (*Model, error) {
	var accounts []Model
	q := r.db.Model(&accounts)

	for k, v := range search {
		q.Where(k+" = ?", v)
	}

	q.Limit(2)
	err := q.Select()
	if err != nil {
		return nil, err
	}

	if len(accounts) == 1 {
		return &accounts[0], nil
	}

	if len(accounts) == 0 {
		return nil, nil
	}

	return nil, pg.ErrMultiRows
}

func (r *Repository) SetRoles(acc Model, organizationId string, roles []string) error {
	rm := Roles{
		Id: db.NewUUID(),
		AccountId:acc.Id,
		OrganizationId:organizationId,
		Roles: roles,
	}
	_, err := r.db.Model(&rm).
		OnConflict("(account_id, organization_id) DO UPDATE").
		Set("roles = ?", pg.Array(roles)).
		Insert()

	return err
}
