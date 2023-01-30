import { useSelector } from "react-redux";

export const Home = () => {
    const firstname = useSelector(state => state.inputReducer.firstname)
    const lastname = useSelector(state => state.inputReducer.lastname)
    const position = useSelector(state => state.inputReducer.position)
    
    return <div>
        <div>
            <p>Name: {firstname} {lastname}</p>
            <p>Position: {position}</p>
        </div>
    </div>
}