# Twitch Tracker

Web application that displays whether a Twitch user from a stored list of users is currently streaming and if so, what they are streaming. 

Built with Node.js, Express, EJS, CSS, Semantic UI, and the Twitch.tv API.

## Installation and Setup Instructions

Use the command lines below to clone the repository and start the program. You will need `node` installed globally on your machine.  

```
$ git clone https://github.com/kellyjacksonio/twitch-tracker.git
$ cd twitch-tracker
$ npm install
$ npm start
```

To Visit App:

`localhost:8080`

## Live Example

Please allow a moment for Heroku to wake up.

[Twitch Tracker](https://twitch-tracker-kj.herokuapp.com/)

## Reflection

Originally meant to be a vanilla JavaScript application, I decided to use Node.js to get more practice with using routes and ports, in addition to the basic JavaScript logic.

Currently, the app has a locally stored list of users that are displayed, but in the future, it could be transformed into a CRUD app using a database and user authentication to allow users to make their own lists of Twitch streamers.