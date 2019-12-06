import React from 'react';
import {connect} from 'react-redux';
import {searchStudents} from '../actions/fetchStudents'
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

const StudentHeader =(props)=>{
return (    
    <div>
        <input style={searchinput} ref={searchRef} onChange={()=>{props.searchStudents(searchRef.current.value)}}/>
        <button style={searchbutton}>search</button>
    </div>
)
}
export default connect(null,{searchStudents:searchStudents})(StudentHeader);