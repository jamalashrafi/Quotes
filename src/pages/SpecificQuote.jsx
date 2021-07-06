import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"
import { getComments } from '../actions/quoteAction';
import AddUserComments from '../containers/AddUserComments';


const SpecificQuote = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const commentList = useSelector(state => state.quoteReducer.comments);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch, commentList]);

    return (
        <>
            <div style={{ backgroundColor: 'green', color: '#f2f' }}>
                <span>{location.aboutProps.quoteText}</span><br />
                <span>{location.aboutProps.userName}</span>
            </div>
            <button onClick={e => setShowAddForm(!showAddForm)}>Add Comments</button>
            {
                showAddForm && <AddUserComments />
            }
            {commentList.length > 0 ? commentList.map((comment, index) => <p key={index}>{comment.comment}</p>) : 'No Comments added yet'}
        </>
    )
}

export default SpecificQuote
