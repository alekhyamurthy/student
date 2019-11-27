import React from 'react';
import {StudentLogin} from '../components/StudentLogin';
import {Dashboard} from '../components/Dashboard';
import {  Route,Switch } from "react-router-dom";
const studentApp = ()=>{
    return (
        <div>
            <Switch>
            <Route path="/" component={StudentLogin}/>
            <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    )
};

export default studentApp;