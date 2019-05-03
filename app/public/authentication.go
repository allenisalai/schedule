package public

import (
	"encoding/base64"
	"errors"
	"firebase.google.com/go"
	"firebase.google.com/go/auth"
	"github.com/labstack/gommon/log"
	"golang.org/x/net/context"
	"google.golang.org/api/option"
	"io/ioutil"
	"os"
	"sync"
)

const FIREBASE_PROJECT_ID = "alai-aba"

var FIREBASE_CREDENTIAL_FILE = os.TempDir() + "/firebase_credentials.json"
var firebaseApp *firebase.App = nil
var once sync.Once

func WriteFirebaseCredentialFile() error {
	firebaseCredentials := os.Getenv("FIREBASE_CREDENTIALS")
	if firebaseCredentials == "" {
		return errors.New("FIREBASE_CREDENTIALS needs to be set")
	}

	decodedCredentials, err := base64.StdEncoding.DecodeString(firebaseCredentials)
	if err != nil {
		return errors.New("could not decode FIREBASE_CREDENTIALS")
	}

	err = ioutil.WriteFile(FIREBASE_CREDENTIAL_FILE, decodedCredentials, os.ModePerm)
	if err != nil {
		return errors.New("could not decode FIREBASE_CREDENTIALS")
	}

	return nil
}

func getFirebaseApp(ctx context.Context) *firebase.App {
	var err error
	once.Do(func() {
		opt := option.WithCredentialsFile(FIREBASE_CREDENTIAL_FILE)
		config := &firebase.Config{ProjectID: FIREBASE_PROJECT_ID}
		firebaseApp, err = firebase.NewApp(ctx, config, opt)
	})

	if err != nil {
		log.Fatalf("error creating firebase.App : %v\n", err)
	}

	return firebaseApp
}

func verifyIdToken(idToken string) (*auth.Token, error) {
	ctx := context.Background()
	client, err := getFirebaseApp(ctx).Auth(context.Background())
	if err != nil {
		return nil, err
	}

	return client.VerifyIDToken(ctx, idToken)
}
