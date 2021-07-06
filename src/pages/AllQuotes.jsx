import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuoteList } from '../actions/quoteAction';

const AllQuotes = () => {
    // debugger
    const quoteList = useSelector(state => state.quoteReducer.quotes);
    console.log('quoteList', quoteList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuoteList());
    })
    console.log('Length', quoteList.length)
    if (quoteList.length === 0)
        return 'Loading...'
    return (
        <div>
            {
                quoteList.map((quote, index) => <p key={index}>{quote.quote}</p>)
            }
        </div>
    )
}

export default AllQuotes
