# Simple todo application with React and express

## Run backend

In the `/backend` directory, run:

`npm start`

## Run frontend

In the `/frontend` directory, run:

`npm start`


## Known possible issues

`Proxy error: Could not proxy request /todos from localhost:3000 to http://localhost:3001/.`

It can be fixed two ways:
* Running backend script first, frontend second
* Running frontend script, then backends. Wait for the backend script to run. Refresh localhost:3000

If this does not help, it might be problem if Mac is used.
The possible fix:
* use `http://127.0.0.1:5000` instead of `localhost:5000`