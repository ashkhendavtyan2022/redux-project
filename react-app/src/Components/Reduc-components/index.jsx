import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { productActions } from "../../state/product/action";
import { profileActions } from "../../state/profile/action";

export const Redux = () => {
    const dispatch = useDispatch()

    
    const cash = useSelector(state => state.profileReducer.cash)
    const tiv = useSelector(state => state.productReducer.tiv)

    const Addclick = (e) => {
        dispatch({type: profileActions.ADD, payload: e})
    }

    const Getclick = (e) => {
        dispatch({type: profileActions.GET, payload: e})
    }

    const Multiplyclick = (e) => {
        dispatch({type: productActions.MULTIPLY, payload: e})
    }

    const Divideclick = (e) => {
        dispatch({type: productActions.DIVIDE, payload: e})
    }

    return <div>
        {console.log(tiv)}
        <p>{cash}</p>
        <p>{tiv}</p>
        <button onClick={() => Addclick(10)}>Add</button>
        <button onClick={() => Getclick(5)}>Get</button>
        <button onClick={() => Multiplyclick(2)}>Multiply</button>
        <button onClick={() => Divideclick(2)}>Divide</button>
    </div>
}