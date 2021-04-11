const initialSate ={
    number :0,
}

const reducer = (state=initialSate,action) =>{
    if(action.type === "ADD"){
        return {
            number :state.number + 1
        }
    }
    else if(action.type ==="SUBTRACT"){
        return {
            number :state.number - 1
        }
    }
    else {
        return state
    }
}

export default reducer;