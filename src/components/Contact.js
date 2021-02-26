import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">ContactR</h4>
            <p className="center">Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact </p>
        </div>
    )
}

export default Contact 