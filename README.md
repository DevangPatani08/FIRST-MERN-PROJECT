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

- We will add the a new pages folder in the src folder with a "Home.js" file for the code for the home page.
- We will add the a new components folder in the src folder with a "Navbar.js" file for the code for the navbar components.

### 2.2 Connecting Backend & Frontend
- We will use the useEffect hook & fetch method to fetch the data from the api every time the home page is loaded.
- We will add a proxy in the package.json file inside the frontend folder to create a proxy server with the url of the server.js file.
- Then we will use the map method to map through the data in json format into the html code & display it on the home page.

### 2.4 Workout Details Display
- Now create a new component under components folder named "WorkoutDetails.js".
- We will pass the _id as key & workout as props into the component.
- Add CSS in the index.css

### 2.5 Workout Form
- Now create a new component under components folder named "WorkoutForm.js".
- Add the component to the home.js file.
- Write the code for the form component & add the css in the index.css for the form.
- Now there is only one drawback that we need to refresh the page to view the changes.

### 2.5 React Context & useReducer Hook
- We will get rid of the refresh page drawback by using the local storage.
- Create a folder named "context" under the src folder with a file named "WorkoutContext.js" for global access.
- we will create a WorkoutContextProvider in the WorkoutContext.js file.
- Now we will wrap our App in the WorkoutContextProvider in the index.js file.
- Create a reducer which will act based on the action.type that will be triggered.
- Pass the state and dispatch as values.
- Create a folder named "hooks" under the src folder with a file named "useWorkoutsContext.js" as a custom hook.
- Now use the hook globally by importing it into respective files and use dispatch method to dispatch the type of action needs to be taken.