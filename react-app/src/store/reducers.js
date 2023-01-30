// export const Reducer = {
//     PROFILE: "PROFILE"
// }

import { ProfileReducer } from "../state/profile/index";
import { combineReducers } from "redux";
import { ProductReducer } from "../state/product";
import { InputReducer } from "../state/input";

export const reducers = combineReducers({
    profileReducer: ProfileReducer,
    productReducer: ProductReducer,
    inputReducer: InputReducer,
})