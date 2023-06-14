import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/CardsReducers'; 

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const middleware = applyMiddleware(thunk);


const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
