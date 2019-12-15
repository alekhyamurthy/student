import React from 'react';
import {Redirect} from 'react-router-dom';
import '../css/studentGrid.css';

export class StudentGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }

     studentDetail = (e)=>{
        e.preventDefault();
        this.setState({"redirectToReferrer":true});
    }
    render(){
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true && this.props.student) {
           return  <Redirect to={{
            pathname: '/StudentDetails',
            state:{student:this.props.student}
        }}
/>
        }
    return (
        <div className="col" onClick ={this.studentDetail.bind(this)}>
            <div>
                <label>Name:</label>
                <span>{this.props.student.name}</span></div>
            <div>        <label>RollNo:</label>
                <span>{this.props.student.rollNo}</span></div>
            <div>  <label>Total Marks:</label><span>{Object.values(this.props.student.marks).reduce(function (total, marks) {
                return total + marks;
            })}</span></div>
    </div>)
    }
}