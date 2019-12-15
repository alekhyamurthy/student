import React from 'react';
import {StudentLogin} from '../components/StudentLogin';
import { Route,Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import { StudentDetails } from './StudentDetails';

const studentApp = ()=>{
    return (
        <div>
            <Switch>
            <Route path="/" exact component={StudentLogin}/>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/StudentDetails" exact component={StudentDetails} />
            </Switch>
        </div>
    )
};

export default studentApp;