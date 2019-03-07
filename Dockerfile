## frontend app
FROM node:latest AS frontend

WORKDIR /angular-app

COPY fe/package*.json ./

RUN npm install

RUN mkdir -p /angular-app/dist

COPY fe/. .

#RUN npm install node-sass@latest && npm rebuild node-sass

RUN npm run build

ENTRYPOINT ["npm", "run"]
CMD ["build"]

# rest app
FROM golang:1.11-alpine AS backend
RUN apk add bash ca-certificates git gcc g++ libc-dev


RUN go get -u github.com/maxcnunes/gaper/cmd/gaper
RUN go get bitbucket.org/liamstask/goose/cmd/goose

WORKDIR /go-app

COPY app/go.mod .
COPY app/go.sum .
RUN go mod download

COPY app .

RUN go build -o app ./main.go

#RUN gaper  --build-args
ENTRYPOINT ["gaper"]



FROM alpine:latest AS application

RUN apk add curl

WORKDIR /root/
RUN mkdir -p ./fe/dist
COPY --from=frontend /angular-app/dist ./fe/dist
COPY --from=backend /go-app/app .
COPY --from=backend /go-app/db ./db
COPY --from=backend /go/bin/goose /usr/local/bin/goose
COPY Procfile .

ENV FRONTEND_DIST_DIR ./fe/dist