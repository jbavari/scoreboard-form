This will just be a simple form to fill out a game of football.

You'll enter two team names, a home and visitor team.

Then you'll click some buttons to add field goals and touch downs.

Click a button, and it will submit the form to the `scoreboard-api` project!

# Getting started

# Angular 2

`npm run angular2` -> builds angular2 with webpack in `app/angular2` and serves index.html in that directory
`npm run react` -> builds react with browserify in `app/react` and serves index.html in that directory

`npm run all` -> builds angular2/react and places them in `www`, where you can access them both simultaneously in `http://localhost:3000/angular2` or `http://localhost:3000/react`.

# File structure:

```
./angular
  ./app
    ./app.js
./angular2
  ./app
    ./components
      ./team.js
      ./scoreboard.js
./node_modules
  ./angular
  ./react
./react
  ./app
    ./components
      ./team.js
      ./scoreboard.js
```
