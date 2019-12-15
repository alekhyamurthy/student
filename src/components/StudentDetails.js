import React from 'react';
import '../css/studentGrid.css';
export const StudentDetails = (props) => {
    return (
        <div className="col">
            <div>
                <label>Name:</label>
                <span>{props.location.state.student.name}</span></div>
            <div>        <label>RollNo:</label>
                <span>{props.location.state.student.rollNo}</span></div>
            <div>{getSubjectWiseMarks(props)}</div>
        </div>
    )
}
const getSubjectWiseMarks = (props) => {
    const marks = props.location.state.student.marks;
    return Object.keys(marks).map(function (key) {
        return <div>
            <label>{key}:</label><span>{marks[key]}</span></div>
    })
}