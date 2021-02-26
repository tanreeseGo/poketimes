import React from 'react'

const Rainbow = (WrappedComponentss) => {
    const color = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = color[Math.floor(Math.random() * 5)]
    const className = randomColor + '-text'

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComponentss {...props}/>
            </div>
        )
    }
}

export default Rainbow;