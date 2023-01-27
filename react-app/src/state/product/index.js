import { productActions } from "./action";

const productState = {
    tiv: 10,
}

export const ProductReducer = (state = productState, action) => {
    switch(action.type) {
        case productActions.MULTIPLY:
            return {...state, tiv: state.tiv * action.payload}
        case productActions.DIVIDE:
            return {...state, tiv: state.tiv / action.payload}
        default:
            return state
    }

}