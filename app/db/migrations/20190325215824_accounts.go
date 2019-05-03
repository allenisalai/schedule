package main

import (
	"database/sql"
	"log"
)

// Up is executed when this migration is applied
func Up_20190325215824(txn *sql.Tx) {
	_, err := txn.Exec(`
			CREATE TABLE account (
				id UUID PRIMARY KEY,
				external_account_id CHAR(28) NOT NULL UNIQUE,
				first_name VARCHAR(255) NOT NULL,
				last_name VARCHAR(255) NOT NULL,
				enabled bool default false, 
				global_roles text[]
			) 
	`)

	if err != nil {
		log.Fatalln(err)
	}
}

// Down is executed when this migration is rolled back
func Down_20190325215824(txn *sql.Tx) {
	txn.Exec("DROP TABLE account")
}
