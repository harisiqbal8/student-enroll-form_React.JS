import { useDispatch } from 'react-redux'

function Decrement() {

    let dispatch = useDispatch();

    return <>
        <button onClick={() => { dispatch({ type: 'SubtractScore' }) }}> Decrement Count </button>
    </>
}


export default Decrement;
