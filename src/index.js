import React from 'react';
import ReactDom from 'react-dom';
import StudentApp from '../src/components/StudentApp'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware  } from 'redux';
import { reducers } from '../src/reducers/combinedReducer';
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));
ReactDom.render(<Provider store={store}>
    <BrowserRouter><StudentApp /></BrowserRouter></Provider>, 
    document.querySelector("#studentcontainer"));