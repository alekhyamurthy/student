import React from 'react';
import ReactDom from 'react-dom';
import StudentApp from '../src/components/StudentApp'
import { BrowserRouter } from "react-router-dom";

ReactDom.render(<BrowserRouter><StudentApp/></BrowserRouter>,document.querySelector("#studentcontainer"));