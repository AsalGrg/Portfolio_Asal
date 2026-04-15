import React from 'react'

const SectionHeading = ({heading, subtitle}) => {
    return (
        <div className='header space-y-3 mb-10'>
            <h2 className='heading-big text-white'>{heading}</h2>
            <p className='para text-white/80 w-fit mx-auto'>{subtitle}</p>
        </div>
    )
}

export default SectionHeading