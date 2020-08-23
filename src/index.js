import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import counterReducers from "./reducers/counter";
import isLoggedReducers from "./reducers/isLogged";
import AddAllReducers from "./reducers";
import { Provider   } from "react-redux";
//import { createStore  } from "redux";

const store = createStore( AddAllReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

ReactDOM.render(
  <React.StrictMode>


  <Provider store={store}>
  <App />
  </Provider>
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
