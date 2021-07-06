import { ADD_QUOTE, GET_QUOTES } from '../constants'
const INITIAL_STATE = {
    quotes: []
}


const quoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_QUOTE:
            return { ...state, quotes: [...state.quotes, action.payload] }
        case GET_QUOTES:
            return { quotes: state.quotes } //Sending only the required part of the state not the compelete state.
        default:
            return state
    }
};

export default quoteReducer