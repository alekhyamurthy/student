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
       return filteredstudents   && filteredstudents.sort(function(a, b){
            if(sortingOrder.sortOrder === 'ASC' && (sortingOrder.sortBy ==='SORTBYNAME' ? a.name < b.name : a.rollNo - b.rollNo)) { return -1; }
            if(sortingOrder.sortOrder === 'DESC' && (sortingOrder.sortBy ==='SORTBYNAME' ? a.name > b.name : b.rollNo - a.rollNo)) { return 1; }
            return 0;
        });
}
const mapStateToPros = (state)=>({
    fetchStudentList:filterStudents(state.studentReducers.data,state.searchReducer.searchStr,state.sortReducer)
})
export default connect(mapStateToPros,{fetchStudents:fetchStudents})(Dashboard);