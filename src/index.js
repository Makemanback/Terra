import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router as BrowserRouter} from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './store/root-reducer';
import browserHistory from "./browser-history";
import {createAPI} from "./api/api";
import {redirect} from "./store/middlewares/redirect";

import App from './components/app/app';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

