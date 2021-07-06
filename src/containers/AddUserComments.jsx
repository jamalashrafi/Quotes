import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../actions/quoteAction';

const AddUserComments = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addComment({ comment }));
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea id='comment' value={comment} onChange={e => setComment(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddUserComments
