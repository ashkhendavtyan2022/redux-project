import { inputActions } from "./action"

const inputState = {
    firstname: "",
    lastname: "",
    position: "",
}

export const InputReducer = (state = inputState, action) => {
    switch(action.type) {
        case inputActions.GET_FIRSTNAME: 
            return {...state,  firstname: action.payload}
        case inputActions.GET_LASTNAME: 
            return {...state,  lastname: action.payload}
        case inputActions.GET_POSITION:
            return {...state, position: action.payload}
        default: 
            return state
    }
}