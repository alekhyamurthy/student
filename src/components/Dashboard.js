import React from 'react';
import {connect} from 'react-redux';
import {fetchStudents} from '../actions/fetchStudents';
import {StudentGrids} from '../components/StudentGrids';
 class Dashboard extends React.Component{
    componentDidMount(){
        if(!this.props.fetchStudentList)
        this.props.fetchStudents();
    }
    render(){
        if(!this.props.fetchStudentList){
            return <div>Loading</div>;
        }
        return (<StudentGrids list={this.props.fetchStudentList}/>)
    }
}
const filterStudents = (data,searchStr)=>{
    return data && Object.values(data).filter(function(e,i,a){
        return e.name.startsWith(searchStr)});
}
const mapStateToPros = (state)=>({
    fetchStudentList:filterStudents(state.studentReducers.data,state.searchReducer.searchStr)
})
export default connect(mapStateToPros,{fetchStudents:fetchStudents})(Dashboard);