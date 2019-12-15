import React from 'react';
import {StudentGrid} from '../components/StudentGrid';
import StudentHeader from '../components/StudentHeader';

export const StudentGrids = (props)=>{
    return(
        <div style={{'margin':'20px'}}><StudentHeader/>{Object.values(props.fetchStudentList).map((student)=>{
           return <StudentGrid {...props} key={student.rollNo} student={student}/>
        } )}</div>
    )
}