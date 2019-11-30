import React from 'react';
import {connect} from 'react-redux';
import {fetchStudents} from '../actions/fetchStudents';
import {StudentGrid} from '../components/StudentGrid';
import StudentHeader from '../components/StudentHeader';
 class Dashboard extends React.Component{
    componentDidMount(){
        this.props.fetchStudents();
    }
    render(){
        if(!this.props.fetchStudentList){
            return <div>Loading</div>;
        }
        return(
            <div style={{'margin':'20px'}}><StudentHeader/>{Object.values(this.props.fetchStudentList).map((student)=>{
               return <StudentGrid  key={student.rollNo} student={student}/>
            } )}</div>
        )
    }
}
const mapStateToPros = (state)=>({
    fetchStudentList:state.studentReducers.data
})
export default connect(mapStateToPros,{fetchStudents:fetchStudents})(Dashboard);