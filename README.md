# Instagram Post


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Locally](#locally)
  - [Using Docker](#using-docker)
- [API Documentation](#api-documentation)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Postgress (required if running without docker compose)
- npm (Node Package Manager)
- Docker (optional, for running the project in a Docker container)

### Installation

# Clone the repository

```sh
    git clone https://github.com/mikkybang/instagram-post.git

    # Change to the project directory
    cd instagram-post

    Setup your env variables using the example defined [here](https://github.com/mikkybang/instagram-post/blob/main/env.example)
    You can create a `.env` file or set your OS environment variables

    # Install the dependencies
    npm install
```

## Running the Project

### Locally

To run the project on your local machine, follow these steps:

1. Start the server:
   ```sh
   npm run start:dev
   ```

Now, the graphql server should be running at [http://localhost:3003/graphql](http://localhost:3003/graphql).

### Using Docker

Alternatively, you can run the project inside a Docker container using the following steps:


1. Start the application using Docker Compose:
    ```bash
    docker-compose up --build
    ```

Now, the graphql server should be running at [http://localhost:3003/graphql](http://localhost:3003/graphql).

## Populating the database with dummy data

### Locally
1. Once the application is running, open a new terminal and run the following command:
   ```bash
   npm run populate
   ```

### Using Docker

1. Once the application is running, open a new terminal and run the following command:
    ```bash
    docker exec instagram-post-app npm run populate
    ```


## API Documentation

The documentation of graphql server can be found by opening Apollo studio here: [http://localhost:3003/graphql](http://localhost:3003/graphql).
