import React from 'react';
import {connect} from 'react-redux';
import {searchStudents,sortStudentsByName,sortStudentsByRollNo} from '../actions/fetchStudents'
const searchRef = React.createRef();
const searchinput ={
    width:'25%',
    height:'35px'
}
const searchbutton={
    height:'35px',
    margin:'-3rem',
    padding:'2px'
}
const filterbutton={
    height:'35px',
    padding:'5px',
    marginLeft:'60px'
}
const margin={
    height:'35px',
    padding:'5px',
    marginLeft:'10px'
}

const StudentHeader =(props)=>{
return (    
    <div>
        <input style={searchinput} ref={searchRef} onChange={()=>{props.searchStudents(searchRef.current.value)}}/>
        <button style={searchbutton}>search</button>
        <button style={filterbutton} onClick={()=>{props.sortStudentsByName('SORTBYNAME')}}>Name</button>
        <button style={margin} onClick={()=>{props.sortStudentsByRollNo('SORTBYROLLNO')}}>RollNo</button>
    </div>
)
}
export default connect(null,{searchStudents:searchStudents,sortStudentsByName:sortStudentsByName,sortStudentsByRollNo:sortStudentsByRollNo})(StudentHeader);