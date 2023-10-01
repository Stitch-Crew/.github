# Modern Bank Cypher Project Setup

**Modern Bank Cypher** is a cutting-edge banking application with a strong focus on security and encrypted communication. By utilizing both API and service layers, we ensure a robust architecture, separating concerns and enhancing scalability. Based on the cryptographic handshake and encryption standards, Modern Bank Cypher aims to set a benchmark in secure banking operations.

## Prerequisites

* Docker and Docker Compose installed on your machine.
* Git for cloning the repositories.

## Setup

### 1. Clone both repositories

Start by cloning the [`api`](https://github.com/modern-bank-cypher/api) repository:

```
$ git clone https://github.com/modern-bank-cypher/api modern-bank-cypher-api
```

Then, clone the [`service`](https://github.com/modern-bank-cypher/service) repository:

```
$ git clone https://github.com/modern-bank-cypher/service modern-bank-cypher-service
```

### 2. Start the Service

Before booting up the API, ensure the service is up and running. Navigate to the `modern-bank-cypher-service` directory:

```
$ cd modern-bank-cypher-service && docker-compose up -d
```

This action initiates the service, pulling necessary images and running the service container.

### 3. Start the API

Once the service is active, move to the `modern-bank-cypher-api` directory:

```
$ cd ../modern-bank-cypher-api && docker-compose up -d
```

## Verification

After starting both components, validate their statuses with:

```
$ docker ps
```

You should spot `stitch-backend` and `stitch-service` in the running containers list.


## Exploring the API

To delve into the intricacies of the Modern Bank Cypher API, make your way to the Swagger UI:

[http://localhost:3009/swagger](http://localhost:3009/swagger)

Here's a roadmap of what you can achieve there:

1. **Create a New User** : Get started by establishing your identity in our system.
2. **Login** : Securely access the system using the credentials you've set up.
3. **Encryption** : Explore how to safely encrypt your data.
4. **Decryption** : Learn how to retrieve the original form of your encrypted data.

Feel free to test, modify, and optimize your requests right from this interface!
