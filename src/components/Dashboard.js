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
const filterStudents = (data,searchStr,sortingOrder)=>{
    let filteredstudents = data && Object.values(data).filter(function(e,i,a){
        return e.name.startsWith(searchStr)});
       return filteredstudents && filteredstudents.sort(function(a, b){
            if(sortingOrder === 'ASC' && a.name < b.name) { return -1; }
            if(sortingOrder === 'DESC' && a.name > b.name) { return 1; }
            return 0;
        })
}
const mapStateToPros = (state)=>({
    fetchStudentList:filterStudents(state.studentReducers.data,state.searchReducer.searchStr,state.sortReducer.sortOrder)
})
export default connect(mapStateToPros,{fetchStudents:fetchStudents})(Dashboard);