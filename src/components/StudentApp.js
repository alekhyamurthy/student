import React from 'react';
import {StudentLogin} from '../components/StudentLogin';
import { Route,Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard';

const studentApp = ()=>{
    return (
        <div>
            <Switch>
            <Route path="/" exact component={StudentLogin}/>
            <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    )
};

export default studentApp;