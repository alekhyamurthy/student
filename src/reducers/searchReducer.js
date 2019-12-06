export const searchReducer=(state ={searchStr:''},action)=>{
    switch(action.type){
        case 'SEARCH':return {searchStr:action.payload}
        default: return state;
    }
};
