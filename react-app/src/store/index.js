import { createStore } from "redux";
// import { ProfileReducer } from "../state/profile/";
import { reducers } from "./reducers";


const store = createStore(reducers);

export default store;
