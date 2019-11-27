import React from 'react';
import {StudentLogin} from '../components/StudentLogin'
import {  Route,Switch } from "react-router-dom";
const studentApp = ()=>{
    return (
        <div>
            <Switch>
            <Route path="/" component={StudentLogin}/>
            </Switch>
        </div>
    )
};

export default studentApp;