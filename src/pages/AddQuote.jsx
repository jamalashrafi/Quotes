import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuote } from '../actions/quoteAction';
import { useHistory } from 'react-router-dom';

const AddQuote = () => {
    const [userName, setUserName] = useState('');
    const [quote, setQuote] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addQuote({ userName, quote }));
        setUserName('');
        setQuote('');
        history.push('/all-quotes');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'author'}>Author</label>
                <input id='author' type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                <label htmlFor={'quote'}>Text</label>
                <textarea id='quote' value={quote} onChange={e => setQuote(e.target.value)} />
                <button type='submit'>Add Quote</button>
            </form>
        </div>
    )
}

export default AddQuote
