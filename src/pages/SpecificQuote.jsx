import React from 'react';
import { useLocation } from "react-router-dom"


const SpecificQuote = (props) => {
    const location = useLocation();
    console.log('About', location.aboutProps)
    return (
        <div>
            <div style={{ backgroundColor: 'green', color: '#f2f' }}>
                <span>{location.aboutProps.quoteText}</span><br />
                <span>{location.aboutProps.userName}</span>
            </div>
        </div>
    )
}

export default SpecificQuote
