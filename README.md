# backend-api-social-network

![language](https://img.shields.io/github/languages/top/struelensc/backend-api-social-network?style=flat-square)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square&logo=appveyor)](https://opensource.org/licenses/MIT)

## Description

This project was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

This app uses:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Moment.js

## Table of Contents

- [Startup](#startup)
- [Usage](#usage)
- [Appearance](#appearance)
- [Known Problems](#known-problems)
- [License](#license)
- [Questions](#questions)

## Startup

If you would like to have test data already in the database, run the below command in your console.

`npm run seed`

Run the below command in your console to start the server.

`npm start`

## Usage

- When the command `npm run seed` is run, the MongoDB database will be seeded with new information.
- When the command `npm start` is run, the server will initialize.
- GET API routes are set up for receiving all users and all thoughts.
- GET API routes are set up for retrieving a single user by id and a single thought by id.
- POST API routes are set up for creating a new user and creating a new thought.
- PUT API routes are set up for updating a user and updating a thought.
- A DELETE API route is set up for deleting a user by id which will also delete all of their thoughts. _\*See [Known Problems](#known-problems)_
- A DELETE API route is set up for deleting a thought by id.
- POST API routes are set up for adding a friend to a user and adding a reaction to a thought.
- DELETE API routes are set up for removing a friend from a user and removing a reaction from a thought.

### Walkthrough Video

https://www.youtube.com/watch?v=X6oLkmafibk&ab_channel=CourtneyStruelens

## Appearance

![gif](./application.gif)

## Known Problems

If a user's username changes and that user is then deleted, the cascading delete functionality for that user's thoughts will not work. Presently, thoughts are connected to users by the user's username. The thought should be connected to the user by the user id to avoid this bug.

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT License).

## Questions

Feel free to reach me on [GitHub](https://github.com/struelensc).
