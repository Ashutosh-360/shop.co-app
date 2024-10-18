import React, { useState } from 'react'

function SingleStrip({ element }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='flex flex-col gap-1 text-[15px]'>
            <div className='p-3 border font-semibold rounded-lg cursor-pointer' onClick={() => { setIsVisible(!isVisible) }}>{element.question}</div>
            {
                isVisible &&
                <div className='px-3 py-1'>{element.answer}</div>
            }
        </div>
    )
}

export default SingleStrip