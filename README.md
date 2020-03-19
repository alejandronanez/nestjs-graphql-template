# Description

A [NestJS](https://github.com/nestjs/nest) project template that uses GraphQL + generate typings automatically.

## Installation

```bash
$ npm install
```

## Running the app

This template includes a `docker-compose.yml` file that will start a docker container with a Postgresql database for your convinience so you don't have to install it manually.

```bash
# Start postgresql
# PgAdmin will be available in locahost:5050
docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
