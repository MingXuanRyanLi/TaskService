# Introduction
This is the assessment micro-service that will run as part of the overall Acorn system. This service performs the following functions:
- Manage the individual assessments that are pushed and assigned to job candidates for completion.
- Manage the types of assessments that are made available on Acorn.
- Provide a generic interface for the system to manage different types of assessments (games, bot interviews, simple forms).

This micro-service will communicate with:
- Other Acorn micro-services (Candidate, Evaluation, Bot Interviews, Games...)
- The API central gateway

This micro-service will NOT communicate directly with:
- Any front-end server / environment
- Services external to the Acorn system


# Getting Started

## Installation process
Clone this repository onto your system.

Create an environment variable file named `.env` in the root directory. The contents of this file should follow this structure:
```
PORT = 4100

#SERVICES
CANDIDATE_URL = https://acorn-candidate-service-ci.herokuapp.com
BOT_URL = https://acorn-bot-service.herokuapp.com

#DATABASE
MONGODB_URL = mongodb+srv://...
```
`PORT` identifies the HTTP port that this service will be running.

`CANDIDATE_URL` identifies the URL that the Candidate service will be running on.

`BOT_URL` identifies the URL of the Bot Interview service.

`MONGODB_URL` identifies the MongoDB connection string for database access. Ensure that:
- The MongoDB database user has at least read/write permissions to the database.
- The current server's ip address is whitelisted by the MongoDB database administrator.


## Software dependencies
This service requires [Node.js](https://nodejs.org/) v14+ to run.

## Latest releases
### 0.0.1 - 2020-11-25

Added
- Started repository

## API Reference
See Project Acorn wiki for API reference guide.

# Build and Test
Download the required Node.js modules.
```
npm i
```

Start the service.
```
npm start
```

Verify the service is running. You should see the following message:
```
Assessment service is running on port XXXX.
```

Ensure the following services are also running simultaneously:
- Candidate

Make a test API call - perform a simple GET request to the following URL:
```
localhost:XXXX/assessments
```

# Contribute
Please adhere to the following guidelines when making changes to this code base:
- Ensure your code respects the principles of [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
- Isolate proposed changes to a new branch and create a pull request for approval.
