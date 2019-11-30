import React from 'react';
import {connect} from 'react-redux';
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
const searchStudent =(props)=>{
}
const StudentHeader =(props)=>{
    console.log(props);
return (
    
    <div>
        <input style={searchinput} ref={searchRef} onChange={searchStudent}/>
        <button style={searchbutton}>search</button>
    </div>
)
}
const mapStateToProps=(state)=>({
    fetchStudentList:state.studentReducers.data
});
export default connect(mapStateToProps)(StudentHeader);