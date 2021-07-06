import { ADD_QUOTE, GET_QUOTES, ADD_COMMENT, GET_COMMENTS } from '../constants';

export const addQuote = quoteObj => dispatch => {
    dispatch({ type: ADD_QUOTE, payload: quoteObj });
}

export const addComment = commentObj => dispatch => {
    dispatch({ type: ADD_COMMENT, payload: commentObj });
}

export const getQuoteList = () => dispatch => {
    dispatch({ type: GET_QUOTES });
}

export const getComments = () => dispatch => {
    dispatch({ type: GET_COMMENTS });
}