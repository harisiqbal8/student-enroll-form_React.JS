
import { createStore } from "redux";

let initalState = {
    score: 0
}

function appReducerFunction(state = initalState, action) {

    switch (action.type) {
        case 'AddScore':
            return { ...state, score: state.score + 1 }
        case 'SubtractScore':
            return { ...state, score: state.score - 1 }
        default:
            return { ...state }
    }
}


let appStore = createStore(appReducerFunction);

export default appStore;