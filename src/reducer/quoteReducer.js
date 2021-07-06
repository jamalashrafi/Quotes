import { ADD_QUOTE, GET_QUOTES, ADD_COMMENT, GET_COMMENTS } from '../constants'
const INITIAL_STATE = {
    quotes: [],
    comments: []
}


const quoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_QUOTE:
            return { ...state, quotes: [...state.quotes, action.payload] }
        case GET_QUOTES:
            return { ...state }
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.payload] }
        case GET_COMMENTS:
            return { ...state }
        default:
            return state
    }
};

export default quoteReducer