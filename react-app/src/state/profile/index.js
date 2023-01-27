import { profileActions } from "./action"

const defaultState = {
    cash : 5,
}

export const ProfileReducer = (state = defaultState, action) => {
    switch(action.type) {
        case profileActions.ADD:
            return {...state, cash: state.cash + action.payload}
        case profileActions.GET:
            return {...state, cash: state.cash - action.payload}
        default : 
            return state
    }
}
