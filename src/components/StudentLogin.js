import React from 'react';
import '../css/student.css';
import { Redirect } from "react-router-dom";

export class StudentLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }
    submitForm (e) {
        e.preventDefault();
        this.setState({"redirectToReferrer":true});
	}
    render(){
        console.log('logincomponent');
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
           return  <Redirect to="/dashboard" />
        }
    return (
        
        <div className='outer-container'>
            
            <div className='inner-container'>
                <form onSubmit={this.submitForm.bind(this)}>
            <h2>Student Login</h2>
            <div className="form-fields">
                <label>Email</label>
                <div>
                    <input type='text'/>
                </div>
            <div><label>Password</label></div>
            <div>
                    <input type='password'/>
                </div>
            <div><button>LOGIN</button></div>
            </div>
            </form>
            </div>
        </div>
    )
}
}
