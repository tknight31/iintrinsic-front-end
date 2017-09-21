import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import projectsReducer from './reducers/projectsReducer'
import usersReducer from './reducers/usersReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({users: usersReducer, projects: projectsReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();