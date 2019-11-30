import axios from 'axios';

export const fetchStudents = () => async dispatch => {
    let response = await axios.get('https://api.myjson.com/bins/1dlper');
    dispatch({
        type: "GET",
        payload: response
    });
}
