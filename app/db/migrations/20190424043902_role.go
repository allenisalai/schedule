package main

import (
	"database/sql"
	"log"
)

// Up is executed when this migration is applied
func Up_20190424043902(txn *sql.Tx) {
	_, err := txn.Exec(`
			CREATE TABLE account_role (
				id UUID PRIMARY KEY,
				organization_id UUID NOT NULL,
				account_id UUID NOT NULL,
				roles text[],
			    CONSTRAINT account_role_org_acc_uniq UNIQUE (organization_id, account_id)
			) 
	`)

	if err != nil {
		log.Println(err)
	}
}

// Down is executed when this migration is rolled back
func Down_20190424043902(txn *sql.Tx) {
	txn.Exec("DROP TABLE account_role")
}
