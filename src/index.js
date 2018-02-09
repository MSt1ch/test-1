import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {reducer} from './reducers';
import thunk from 'redux-thunk';



const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const AppWithStore = (
  <Provider store = {store}>
    <App />
  </Provider>
)



ReactDOM.render(AppWithStore, document.getElementById('root'));


export default store;
