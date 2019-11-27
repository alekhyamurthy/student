import React from 'react';
import '../css/student.css';
export class StudentLogin extends React.Component{
    submitForm (e) {
		e.preventDefault()
	}
    render(){
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
