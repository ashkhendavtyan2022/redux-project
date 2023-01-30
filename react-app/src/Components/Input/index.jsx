import React from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";


export const Input = () => {
    const dispatch = useDispatch();

    const firstname = useSelector(state => state.inputReducer.firstname)
    const lastname = useSelector(state => state.inputReducer.lastname)
    const position = useSelector(state => state.inputReducer.position)

    const changeFirstname = (e) => {
        dispatch({type: "GET_FIRSTNAME", payload: e.target.value})
    }

    const changeLastname = (e) => {
        dispatch({type: "GET_LASTNAME", payload: e.target.value})
    }

    const changePosition = (e) => {
        dispatch({type: "GET_POSITION", payload: e.target.value})
    }

    return <div className="form-container">
        {console.log(firstname)}
        {console.log(lastname)}
        {console.log(position)}

        <div>
            <label htmlFor="">FirstName:</label>
            <input className="input" type="text" value={firstname} onChange={changeFirstname} />
        </div>
        <div>
            <label htmlFor="">LastName:</label>
            <input className="input" type="text" value={lastname} onChange={changeLastname} />
        </div>
        <div>
            <label htmlFor="">Position:</label>
            <input className="input" type="text" value={position} onChange={changePosition} />
        </div>
        
    </div>
}