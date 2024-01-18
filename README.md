# users-api

This project skeleton contains a basic Express setup one endpoint to create a user and one endpoint to fetch all users, and a small suite of tests.

## Scripts for running the application

### Standard
`npm start` starts the server


### Using Dockerfile
`docker build -t users-api .`

`docker run -p 3000:4111 --name my-users-api users-api`

### Using Docker Compose
`docker-compose up` creates the container with a mondodb instance and starts the server.

* Remember to edit .env with the local mongodb instance at your machine.
`MONGO_DB_URL=mongodb://localhost:27017/users-db`

## Scripts for running the tests
`npm test` executes the tests

## Swagger UI
`http://localhost:4111/api-docs/` shows the swagger documentation (if you're running through Standard)

`http://localhost:3000/api-docs/` shows the swagger documentation  (if you're running through Docker)
