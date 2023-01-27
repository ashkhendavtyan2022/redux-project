// export const Reducer = {
//     PROFILE: "PROFILE"
// }

import { ProfileReducer } from "../state/profile/index";
import { combineReducers } from "redux";
import { ProductReducer } from "../state/product";

export const reducers = combineReducers({
    profileReducer: ProfileReducer,
    productReducer: ProductReducer,
})