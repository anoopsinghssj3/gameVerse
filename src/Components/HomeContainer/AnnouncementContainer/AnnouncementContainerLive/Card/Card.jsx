import React from 'react'
import './Card.css'
function Card({ greeting, title, description, src }) {
    return (
        <>
            <span className='announcement-greeting'>{greeting}</span>

            <h3 className='announcement-title'>{title}</h3>

            <p className='announcement-description'>{description}</p>

            <img className='announcement-image' src={src} />

            <div className='announcement-play-button'>
                <label htmlFor="button-p">Play Now</label>
                <button className="button-p " id='button-p'></button>
            </div>
        </>
    )
}

export default Card