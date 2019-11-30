import React from 'react';
import '../css/studentGrid.css';
export const StudentGrid = (props) => {
    return (
        <div className="col">
            <div>
                <label>Name:</label>
                <span>{props.student.name}</span></div>
            <div>        <label>RollNo:</label>
                <span>{props.student.rollNo}</span></div>
            <div>  <label>Total Marks:</label><span>{Object.values(props.student.marks).reduce(function (total, marks) {
                return total + marks;
            })}</span></div>
    </div>)
}