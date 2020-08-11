import React from 'react'

export default function Quote({quote}) {
    const {text, author} = quote
    return (
        <>
            <blockquote className='bp3-blockquote bp3-text-large' id='text'>
                {text}
            </blockquote>
            <h5 id='author' className='bp3-text-muted bp3-heading' style={{ textAlign: 'right' }}>
                {author}
            </h5>
        </>
    )
}
