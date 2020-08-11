import React from 'react'

export default function Quote() {
    return (
        <>
            <blockquote className='bp3-blockquote bp3-text-large' id='text'>
                Quote
            </blockquote>
            <h5 id='author' className='bp3-text-muted bp3-heading' style={{ textAlign: 'right' }}>
                Author
            </h5>
        </>
    )
}
