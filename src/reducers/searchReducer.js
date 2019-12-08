
export const searchReducer=(state ={searchStr:''},action)=>{
    switch(action.type){
        case 'SEARCH':return {searchStr:action.payload}
        default: return state;
    }
};
export const sortReducer = (state = {sortOrder:'ASC',sortBy:'SORTBYNAME'},action)=>{
    switch(action.type){
        case 'SORT':return {sortOrder:state.sortOrder==='ASC'?'DESC':'ASC',sortBy:action.payload}
        case 'SORTBYROLLNO':return {sortOrder:state.sortOrder==='ASC'?'DESC':'ASC',sortBy:action.payload}
        default: return state;
    }
};