## frontend app
FROM node:10-alpine AS frontend

WORKDIR /angular-app

COPY fe/package.json ./

RUN rm -rf node_modules

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
WORKDIR /go-app

COPY app/go.mod .
COPY app/go.sum .
RUN go mod download

COPY app .

RUN go build -o app ./main.go

#RUN gaper  --build-args
ENTRYPOINT ["gaper"]

# rest app migrations
FROM golang:1.11-alpine AS migrations
RUN apk add bash ca-certificates git gcc g++ libc-dev

RUN go get bitbucket.org/liamstask/goose/cmd/goose

WORKDIR /go-migrations

COPY app/go.mod .
COPY app/go.sum .
RUN go mod download
COPY app .

CMD ["goose", "up"]


FROM golang:1.11-alpine

RUN apk add curl

WORKDIR /root/
RUN mkdir -p ./fe/dist
COPY --from=frontend /angular-app/dist ./fe/dist
COPY --from=backend /go-app/app .

RUN mkdir -p ./public/templates
COPY ./app/public/templates ./public/templates

ENV FRONTEND_DIST_DIR ./fe/dist

CMD ["./app"]