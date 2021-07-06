import { ADD_QUOTE, GET_QUOTES } from '../constants';

export const addQuote = quoteObj => dispatch => {
    dispatch({ type: ADD_QUOTE, payload: quoteObj });
}

export const getQuoteList = () => dispatch => {
    dispatch({ type: GET_QUOTES });
}