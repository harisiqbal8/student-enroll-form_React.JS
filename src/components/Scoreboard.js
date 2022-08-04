import { useSelector } from "react-redux";


function Scoreboard(){
    
    let score = useSelector(state => state.score)
    return <>
        <h2>The Current value of count is {score}</h2>
    </>
}

export default Scoreboard;