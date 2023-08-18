import React from 'react'

function Input({ onFilter }) {

    return (
        <div>
            <input className='filter-input'
                placeholder='Filter'
                onChange={onFilter} />
        </div>
    )
}

export default Input;