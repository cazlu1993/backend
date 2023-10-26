# 🎲 backend challenge

[![MegaLinter](https://github.com/leosuncin/nest-graphql-example/workflows/MegaLinter/badge.svg?branch=master)](https://github.com/leosuncin/nest-graphql-example/actions/workflows/mega-linter.yml)
[![CI](https://github.com/leosuncin/nest-graphql-example/workflows/CI/badge.svg?branch=master)](https://github.com/leosuncin/nest-graphql-example/actions/workflows/ci.yml)
![Prettier](https://img.shields.io/badge/Code%20style-prettier-informational?logo=prettier&logoColor=white)
[![GPL v3 License](https://img.shields.io/badge/License-GPLv3-green.svg)](./LICENSE)
[![HitCount](https://hits.dwyl.com/leosuncin/nest-graphql-example.svg)](https://hits.dwyl.com/leosuncin/nest-graphql-example)

> An example of how to create and test a GraphQL Server with Nest.js and TypeORM

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Features

- GraphQL server with [Apollo](https://www.apollographql.com/)
- [Code first](https://docs.nestjs.com/graphql/quick-start#code-first) approach to build the schema
- [TypeORM](https://typeorm.io/) to connect with MySQL
- Unit tests and E2E tests
- Check code quality with [MegaLinter](https://megalinter.github.io/latest/)
- Check continuous integration with [github actions](.github/workflows/ci.yml)
- Run the necessary services with [docker compose](https://docs.docker.com/compose/)

## Run Locally


Install dependencies

```bash
  npm install
```

Create a `.env` from the example one and customize it with your [environment variables](#environment-variables)

Start the services using Docker Compose, install mysql instance

```bash
  docker-compose up -d
```

Run migrations to create the DB schema

```bash
  npm typeorm migration:run
```

Start the server

```bash
  npm start:dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_HOST` localhost **(required)**

`DATABASE_PORT` The port of the to connect to the MySQL instance, default 3302 **(required)**

`DATABASE_USER` the _root_ user to connect to the MySQL instance **(required)**

`DATABASE_PASSWORD` the passowrd of the _root_ to the MySQL instance **(required)**

`DATABASE_DBNAME` the db name, example: sys **(required)**

You can copy the example `.env` and edit the values


## Running Tests

To run unit tests, run the following command:

```bash
  npm test
```

## Tech Stack

**Server:** Typescript, MySQL, Nest.js, TypeORM, Apollo

**Test:** Jest, SuperTest

**DevOps:** Docker Compose
