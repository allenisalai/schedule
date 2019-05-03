package main

import (
	"database/sql"
	"log"
)

// Up is executed when this migration is applied
func Up_20190304071003(txn *sql.Tx) {
	_, err := txn.Exec(`
			CREATE TABLE client (
				id UUID PRIMARY KEY  NOT NULL,
				first_name VARCHAR NOT NULL,
				last_name VARCHAR NOT NULL
			) 
	`)

	if err != nil {
		log.Println(err)
	}

}

// Down is executed when this migration is rolled back
func Down_20190304071003(txn *sql.Tx) {
	txn.Exec("DROP TABLE client")
}
