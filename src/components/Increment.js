import { useDispatch } from "react-redux";

function Increment() {

    let dispatch = useDispatch();

    return <>
        <button onClick={() => { dispatch({ type: 'AddScore' }) }} > Increment Count </button>
    </>
}


export default Increment;