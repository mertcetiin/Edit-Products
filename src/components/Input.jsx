import React from 'react'

function Input({ onFilter }) {

    return (
        <div>
            <input onChange={onFilter} />
        </div>
    )
}

export default Input;