# [Getting Started with Create React App](https://www.bezkoder.com/redux-toolkit-example-crud/)

Create the app using `npx create-react-app travel-blog-ui --template typescript`

### Requirements
Travel Blog App
As A user, I should be able to 
1. create
2. edit 
3. delete
4. see all blogs

## Overview 
Each Blog Article has an ID, title, content, photo, published status

## API's

|Method| URL|Actions|
|-|-|-|
|POST| /api/blogs| create new blog|
|GET| /api/blogs| retrieve all blogs|
|GET| /api/blogs/:id| retrieve a blog by :id|
|PUT| /api/blogs/:id| update a blog by :id|
|DELETE|/api/blogs/:id|update a blog by :id|
|DELETE|api/blogs|delete all blogs|
|GET|/api/blogs?title=[keyword]|find all blogs which title contains keyword|

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Design 
See component diagram.exalidraw for comonent diagram and react dataflow diagram

The App component is a container with React Router. It has navbar that links to routes paths.

– Three components that call async Thunks (that will take care of dispatching the right actions) which uses BlogsDataService to call Rest API.

    BlogsList component gets and displays Blogss.
    Blog component has form for editing Blogs’s details based on :id.
    AddBlog component has form for submission new Blog.

– BlogDataService uses axios to make HTTP requests and receive responses.

We’re gonna create Redux store for storing blogs data. Other React Components will work with the Store via calling async Thunks.

The reducer will take the action and return new state. The reducer for a specific section of the Redux app state is called a “slice reducer”.

## Tech Stack

React 18/17
react-redux 8
redux-toolkit 1.8.5
react-router-dom 6
axios 0.27.2
bootstrap 4

## Project Structure

I’m gonna explain it briefly.

– package.json contains main modules: react, react-router-dom, react-redux, redux-toolkit, axios & bootstrap.
– App is the container that has Router & navbar.
– There are 3 components: TutorialsList, Tutorial, AddTutorial.
– http-common.js initializes axios with HTTP base Url and headers.
– TutorialDataService has methods for sending HTTP requests to the Apis.
– .env configures port for this React CRUD App.

About Redux elements that we’re gonna use:
– store.js is where we create the Redux store instance with tutorials reducer. Each reducer updates a different part of the application state corresponding to dispatched action.
– Reducer and actions for a single feature are defined together in each file of slices folder.



## Action Items
- https://www.bezkoder.com/react-redux-jwt-auth/
- https://www.ibrahima-ndaw.com/blog/a-practical-guide-to-typescript/
- https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/
- https://www.freecodecamp.org/news/how-to-use-react-router-version-6/