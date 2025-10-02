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
- We add a new module named "date-fns" for formatting our date of creation by using the following command:

> npm i date-fns / npm install date-fns

- Finally we add the delete button and the icon from the react icons library along with the logic to handle the button click.


## 3 MERN Authentication

### 3.1 Setup backend

#### 3.1.1 Adding Routes
- Creating a new file named "user.js" for routes for a user under routes folder.
- Now we create a router using express router and export it.
- We will create 2 routes with POST method(since we need to send data):
    1. login route
    2. signup route
- We will define the logic for the routes as a controller.
- Hence, we will create a file named, 'userController.js' under the controllers folder.
- We create 2 controller functions for login, signup and export them.
- We import and insert the controllers into their respective router.
- We will set the api route in the server.js file.
- Now we need a schema for the user data, so will create a model named "userModel.js" under the models folder.
- We will create a method in the schema to validate the email entered and ensure that no 2 users use the same email address.

#### 3.1.2 Password Hashing
- After that we need to install a new package to encrypt the password. We will run the following command:

> npm i bcrypt / npm install bcrypt

- We will now import this package.
- We will use salting for making a strong password. We will enter the salt number as 10, we can enter a higher value but higher the value more the time it will take to process resulting into a bad user experience.
- Then we will use the hash method to encrypt the password.

#### 3.1.3 Email and Password Validation
- Right now the system will accept any text input as a valid email. But we don't want that.
- We will install some packages for the validation process:

> npm i validator / npm install validator

- Import the package in the models file.
- We will use the "isEmail" and "isStrongPassword" methods from the validator package is the signup method(previously create by us) to validate and throw appropriate errors.

#### 3.1.4 Web Tokens Theory
- JSON means JavaScript Object Notation.
- JWT means JavaScript Web Tokens
- A JWT is made from 3 things:
    1. Header: It contains the algorithm and the type.
    2. Payload: It contains info with which a user logs in except their credentials or sensitive data. 
    3. Signature: It is made by encoding the header, payload and secret values used in the signup.
- It is basically a string of encrypted data made from the above 3 things.

#### 3.1.5 Signing Tokens
- For creating the JWT we will need a package, so run the following command to install it:

> npm i jsonwebtoken / npm install jsonwebtoken

- Now import the package in the user controller file.
- Instead of repeating the code in both login and signup, we will create a separate method called "createToken".
- The package has a method named sign that takes in 3 things, sign{ ObjectId, SecretKey, {expiredIn: "duration"} } the duration can by any hours, days, months, etc.
- Finally call the method in the user signup method to create a token on signup.

#### 3.1.6 Logging user in
- Similar to the signup model we need a login model for user login.
- We will create a model for login in the userModel file.
- We will use the same logic as signup but instead of checking that if the user exists, we will find the user with matching email and password.
- We will first check if all fields a filled, then check if the email is valid and then use the inbuilt compare method of the bcrypt package to compare the password entered and the hashed password string. 
- If the password matches we return the user.
- Now we will use the same controller logic of signup controller in the userController file and edit the logic for the login controller.
- Only instead of signup method, we will use the login method and create a login token on user login.

#### 3.1.7 Creating react auth Context
- We will create an authorization context in the frontend under the context folder named "AuthContext.js".
- We will write the logic similar to the workout's context and wrap everything in the index.js file inside the auth context provider.
- In the logic we will have 3 types of cases:
    1. LOGIN -> returns the user present in the action payload.
    2. LOGOUT -> returns by setting user as a null value.
    3. SIGNUP -> .
- Now we go ahead and simply create a hook for under the hooks folder as "useAuth.js" file.
- Simply copy the code from the useWorkoutsContext.js and replace the necessary variables.


#### 3.1.8 Login and SignUp Forms
- After writing the backend we will need 2 page in the frontend:
    1. Login Page 
    2. SignUp Page
- Each page will have a separate form for user login and user sign-up process.
- We will create them under the pages folder as "Signup.js" & "Login.js".
- We will add 2 similar forms to each page.
- Then add a Route to each page in the App.js file and 2 link tags to each page in the ui of the navbar.
- Now add the css for the form in the index.css file.

#### 3.1.9 Making Hooks for Signup, Login & Logout
1. Signup hook:
    - We will create a hook for the signup process under the hooks folder named 'useSignup.js'.
    - We create a dispatch using the useAuthContext hook and fetch it at /api/user/signup, also passing the method and header values in a method named signup.
    - The useSignup hook returns the error, isLoading state, and the signup method.
    - Finally we use the hook on the signup page passing the email and password and display the error below the button if there is any.
    - Also we store the email and token in the local storage so that if the user reloads the page still the user stays signed up.
2. Logout hook: 
    - We will create a hook for the logout process under the hooks folder named 'useLogout.js'.
    - In that hook we will create a method named logout which will simply remove the user from the local storage & dispatch the LOGOUT type of the useAuthContext hook.
    - Add a button for logout in the navbar.
    - we will handle the display property of the buttons later but will give some basic styling to it in the index.css file.
3. Login hook:
    - We will create a hook for the login process under the hooks folder named 'useLogin.js'.
    - We create a dispatch using the useAuthContext hook and fetch it at /api/user/login, also passing the method and header values in a method named login.
    - The useLogin hook returns the error, isLoading state, and the login method.
    - Finally we use the hook on the login page passing the email and password and display the error below the button if there is any.
    - Also we store the email and token in the local storage so that if the user reloads the page still the user stays logged in.

#### 3.1.10 Updating initial auth status
- We need to have a initial status for the the user auth so that if the page is reloaded, the user does not require to login again and again.
- Also the logout, login and signup, all buttons should not be visible at the same time.
- We use the userAuthContext hook to get the user from the local storage and if the user is present we display the span and logout button and when user is null then display the login and signup buttons.
- Now, we want the same user value for local storage and the auth context.
- For that we will use the useEffect hook to dispatch the type as "LOGIN" and payload as user from the local storage using the getItem method and then converting it into a json format if the user is present on every page load.
- After this still when we go to the home page we get the access to the workouts irrespective to the auth status.

#### 3.1.11 Protecting API Routes
- For protecting the api routes we will require a middleware.
- So we will create a folder under backend folder named "middleware" and under it we will create a file named "requireAuth.js".
- In this file we will write a callback function called requireAuth and it will require 3 parameters:
    1. Request 
    2. Response
    3. Next
- Now we will verify the auth by getting the token from the req.header and then splitting it get the id value using jwt package.
- Once, we get the id we simply try to find if it exists in the db. If it does then we use the next method to allow the auth.
- Apply the condition we import the requireAuth method in the workouts routes file and use it right after the router is defined.

#### 3.1.12 Having Authorized Requests
- Firstly we do not want the home page to fetch all workouts from the api untill and unless the user is logged in.
- For that we will get the user values using the useAuthContext hook in the home page file and then we will put a condition that if the user is present then only make the call for the fetch api, add the user as a dependency.
- We will now add the header authorization -> `Bearer ${user.token}` into the fetch request.
- Add the same in the WorkoutDetails and WorkoutForms where we are adding and deleting the workout.

#### 3.1.13 Protecting react routes
- When the user is logged in still we were able to go to the login page by changing the url.
- Now for the redirection from the login page after login we will use the react-router-dom package called 'Navigate' in the app.js file to redirect the user.
- Now, if we login using 2 different email still we see the same data added by 2 different users which we don't want.

#### 3.1.14 Assigning workouts to Users
- For assigning data to the user we need to add the user._id to the model of the data.
- we will added the user _id to the workoutModel in the backend under the models.
- After this we will add the user id in the workouts controllers.
- We will add user_id when the workout is created and when we fetch all the workouts we will add user_id as a condition while find method is called.
- Also for the display of data after logout, we will add dispatch for workout context as well in the useLogout hook. 