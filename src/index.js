import React from 'react';
import { render } from 'react-dom';

// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

import './styles.css';
import App from './app';

// import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
