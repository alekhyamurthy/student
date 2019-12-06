import React from 'react';
import {StudentGrid} from '../components/StudentGrid';
import StudentHeader from '../components/StudentHeader';

export const StudentGrids = (props)=>{
    return(
        <div style={{'margin':'20px'}}><StudentHeader/>{Object.values(props.list).map((student)=>{
           return <StudentGrid  key={student.rollNo} student={student}/>
        } )}</div>
    )
}