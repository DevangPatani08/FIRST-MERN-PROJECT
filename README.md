# MERN PROJECT

    M: MONGO DB
    E: EXPRESS JS
    R: REACT JS
    N: NODE JS

| Browser / Client Side |  Backend(Server)  |     DB    |
|:---------------------:| :---------------: |    :--:   |
|       React App       |  ExpressJS+NodeJS |  MongoDB  |

## 1. Backend

    npm init -y
    npm i express / npm install express
    npm i -g nodemon --save-dev

### 1.1 Running Application

    npm run dev / nodemon server.js
    npm i dotenv

### 1.2 API Endpoints

- GET /workouts --> Get all the workout docs.
- POST /workouts --> Create a new workout doc.
- GET /workouts/:id --> Get a single workout doc.
- DELETE /workouts/:id --> Delete a single workout doc.
- PATCH /workouts/:id --> Updates a single workout doc.

### 1.3 Create a MongoDB Database
- Create a new project and cluster on mongodb atlas website.
- Add the connection url in the dotenv file and replace the password in the url.
- Install mongodb & mongoose dependencies by the following command:

    > npm i mongodb mongoose / npm install mongodb mongoose

- Now import the mongoose dependency into the server.js file.
- Add the code to connect the DB using mongoose and shift the server listen into the connection.

### 1.4 Models and Schemas
- Create a folder named "models" & a file inside it named "workoutModel.js".
- Create the model/structure of the DB having title, reps & load as it's columns.
- Import the model into the routes as "Workout" to use it inside the api requests.

### 1.5 Controllers
- Create a folder named "controllers" & a file inside it named "workoutController.js".
- Import the workoutModel into the controller file.
- We will write the logic for the api requests in the form of functions/controllers in the workoutController.js and will import the functions into the routes/workout.js to use them accordingly.

## 2. Frontend

### 2.1 Create A React App
- We will create a react app named frontend using the following command:

> npx create-react-app frontend

- Then we will delete the unnecessary files like:
    - logo.svg
    - App.test.js
    - reportWebVitals.js
    - setupTests.js

- Edit the index.js and App.js file removing the deleted file calls and imports.

- Install the required modules using the following command:

> npm i react-router-dom / npm install react-router-dom

