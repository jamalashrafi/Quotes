import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuoteList } from '../actions/quoteAction';
import { NavLink } from 'react-router-dom';

const AllQuotes = () => {
    const [toggleBtn, setToggleBtn] = useState('Sort Ascending');
    const [quoteListState, setQuoteListState] = useState([]);
    const quoteList = useSelector(state => state.quoteReducer.quotes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuoteList());
        setQuoteListState(quoteList);
    }, [quoteList, dispatch]);

    const sortAr = (order) => {
        let quoteArList = [...quoteListState];
        if (order === 'descending') {
            quoteArList.sort((a, b) => {
                if (a.quote > b.quote)
                    return -1;
                if (a.quote < b.quote)
                    return 1;
                return 0;
            });
        } else {
            quoteArList.sort((a, b) => {
                if (a.quote < b.quote)
                    return -1;
                if (a.quote > b.quote)
                    return 1;
                return 0;
            });
        }
        setQuoteListState(quoteArList);
    }

    const handleToggle = () => {
        if (toggleBtn === 'Sort Ascending') {
            setToggleBtn('Sort Descending');
            sortAr('ascending')
        }
        else if (toggleBtn === 'Sort Descending') {
            setToggleBtn('Sort Ascending');
            sortAr('descending')
        }

    }

    if (quoteListState.length === 0)
        return 'Loading...'
    return (
        <>
            <button onClick={handleToggle}>{toggleBtn}</button>
            <div>
                {
                    quoteListState.map((quote, index) => (
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
        </>
    )
}

export default AllQuotes
