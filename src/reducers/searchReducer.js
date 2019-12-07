
export const searchReducer=(state ={searchStr:''},action)=>{
    switch(action.type){
        case 'SEARCH':return {searchStr:action.payload}
        default: return state;
    }
};
export const sortReducer = (state = {sortOrder:'ASC'},action)=>{
    switch(action.type){
        case 'SORT':return {sortOrder:state.sortOrder==='ASC'?'DESC':'ASC'}
        default: return state;
    }
};