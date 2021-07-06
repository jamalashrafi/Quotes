import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuoteList } from '../actions/quoteAction';
import { NavLink } from 'react-router-dom';

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
                quoteList.map((quote, index) => (
                    <div key={index}>
                        <span >{quote.quote}</span>
                        <NavLink to={{
                            pathname: `/all-quotes/${quote.quote}`,
                            aboutProps: {
                                userName: quote.userName,
                                quoteText: quote.quote
                            }
                        }}>View FullScreen</NavLink>
                    </div>)
                )
            }
        </div>
    )
}

export default AllQuotes
