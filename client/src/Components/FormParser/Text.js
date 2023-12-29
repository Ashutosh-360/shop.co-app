import React from 'react'

function Text({field,onInputChangeHandler}) {
    return (
        <div className='w-full flex flex-col gap-1'>
            <label className='font-semibold'>{field.label}</label>
            <input className='p-2 border rounded-lg focus:outline-none' type="text" onChange={onInputChangeHandler}/>
        </div>
    )
}

export default Text;