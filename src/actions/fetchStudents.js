import axios from 'axios';

export const fetchStudents = () => async dispatch => {
    let response = await axios.get('https://api.myjson.com/bins/1dlper');
    dispatch({
        type: "GET",
        payload: response
    });
}
export const searchStudents = (value)=>{
  return { type:"SEARCH",
    payload:value
}
}
export const sortStudentsByName = ()=>{
    return {
        type:'SORT'
    }
}