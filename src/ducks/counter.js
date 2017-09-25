// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//COSNTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


//ACTION BUILDERS
export function increment(num) {
    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement(num) {
    return {
        type: DECREMENT,
        payload: num
    }
}

let initialState = {
    currentValue: 0
}

//REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            let newNum = state.currentValue + action.payload;
            return Object.assign({}, state, { currentValue: newNum })
        case DECREMENT:
            let decreNum = state.currentValue - action.payload;
            return Object.assign({}, state, { currentValue: decreNum })
        default:
            return state;
    }
}