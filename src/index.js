import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducer'
import './index.css';
import App from './App';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});
const middleWares = [reduxThunk, loggerMiddleware];
const composeEnhancer = composeWithDevTools(applyMiddleware(...middleWares));
const store = createStore(reducer, composeEnhancer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

