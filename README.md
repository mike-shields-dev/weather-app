# Weather App 
*Author: Michael Shields*

## Introduction

This application is the first assignment in the Frontend Module of the Manchester Codes Software Engineering Fast track Course. <br><br>
The project is an introduction to the front end UI framework [React](https://reactjs.org/). 

The Application is a simple weather forecast application that displays the requested city's forecasted weather for the next 5 days. Additional details for each daily forecast can also be viewed.

The assignment is an opportunity to explore:

- Implementing features based on user stories.
- Using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to develop features following the Test Driven Development Paradigm
- Exploring React Functional component hooks, such as [useState](https://reactjs.org/docs/hooks-state.html), [useEffect](https://reactjs.org/docs/hooks-effect.html) and [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- Stateful and stateless components
- Passing props to child components
- Applying the [PropTypes library](https://reactjs.org/docs/typechecking-with-proptypes.html) to components to improve type checking
- Using [Axios](https://axios-http.com/docs/intro) to make requests to an API
- Consuming and rendering data returned from the API
- [Rendering lists and managing the `keys` prop](https://reactjs.org/docs/lists-and-keys.html), using JavaScript method [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Development Environment Setup and Usage

- Clone the repository to directory on your local machine
    ```bash
    $ git clone https://github.com/mike-shields-dev/weather-app.git
    ```
- Switch your terminal's context to the cloned repositorie's directory
    ```bash
    $ cd weather-app
    ```
- Open the directory in your IDE (Visual Studio Code)
    ```bash
    $ code .
    ```
- With [nodeJS](https://nodejs.org/en/) setup on your machine, install the npm dependencies
    ```bash
    $ npm install
    ```
- To view the application live in the browser
    ```bash
    $ npm start
    ```
     If not automatically done, Open your web browser and navigate to: [https://localhost:3000](https://localhost:3000) to view the application via [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)'s development server.
- To run tests
    ```
    $ npm test
    ```

## Feature WishList

- Make use of the browsers [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) and third party API's to determine the weather in the nearest city to the user.
- Switch to an API with a richer offering, to allow additional features to be added, to allow users to make requests for forecasts with different time frames (hourly, day, 14 days 2weeks).