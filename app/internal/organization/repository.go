package organization

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

func (r *Repository) Create(org *Model) error {
	return db.GetDb().Insert(org)
}

func (r *Repository) Find(id string) (*Model, error) {
	org := new(Model)

	_, err := r.db.QueryOne(org, "SELECT * FROM organization WHERE id = ?", id)

	if err == pg.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return org, nil
}

func (r *Repository) FindBy(search map[string]interface{}) ([]Model, error) {
	var org []Model
	q := r.db.Model(org)

	for k, v := range search {
		q.Where(k+" = ?", v)
	}

	err := q.Select()

	return org, err
}

func (r *Repository) FindOneBy(search map[string]interface{}) (*Model, error) {
	var orgs []Model
	q := r.db.Model(&orgs)

	for k, v := range search {
		q.Where(k+" = ?", v)
	}

	q.Limit(2)
	err := q.Select()
	if err != nil {
		return nil, err
	}

	if len(orgs) == 1 {
		return &orgs[0], nil
	}

	if len(orgs) == 0 {
		return nil, nil
	}

	return nil, pg.ErrMultiRows
}
