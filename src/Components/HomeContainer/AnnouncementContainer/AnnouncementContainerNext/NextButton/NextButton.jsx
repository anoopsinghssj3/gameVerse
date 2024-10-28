import React from 'react'
import "./NextButton.css"
function NextButton() {
    return (
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon next-button" aria-hidden="true"></span>
            <span className="visually-hidden ">Next</span>
        </button>
    )
}

export default NextButton