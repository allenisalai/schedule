package db

import (
	"github.com/go-pg/pg"
	"os"
)

var db *pg.DB

func InitDatabase() *pg.DB {
	dbOpts, err := pg.ParseURL(os.Getenv("DATABASE_URL"))

	dbOpts.PoolSize = 20
	dbOpts.MinIdleConns = 20

	if err != nil {
		panic(err)
	}

	db = pg.Connect(dbOpts)

	return db
}

func GetDb() *pg.DB {
	return db
}
