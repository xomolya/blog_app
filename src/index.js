import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './config/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';




const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>,

document.getElementById('root'));
