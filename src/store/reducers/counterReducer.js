const initialState = {
    num: 0,
}

export const counterReducer=(state=initialState, action)=>{
    console.log("REDUCER");
    if(action.type==="PLUS"){
        return {
            ...state,
            num: state.num+1
        }
    }
    if(action.type==="MINUS"){
        return {
            ...state,
            num: state.num-1
        }
    }
    return state
}