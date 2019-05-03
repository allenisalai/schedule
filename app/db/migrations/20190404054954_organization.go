package main

import (
	"database/sql"
	"log"
)

// Up is executed when this migration is applied
func Up_20190404054954(txn *sql.Tx) {
	_, err := txn.Exec(`
			CREATE TABLE organization (
				id UUID PRIMARY KEY,
				name VARCHAR(255) NOT NULL UNIQUE
			) 
	`)

	if err != nil {
		log.Println(err)
	}
}

// Down is executed when this migration is rolled back
func Down_20190404054954(txn *sql.Tx) {
	txn.Exec("DROP TABLE organization")
}
