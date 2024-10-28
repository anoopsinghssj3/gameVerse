import React from 'react'
import './AnnouncementContainerLive.css'
import Card from './Card/Card'

function AnnouncementContainerLive() {
    return (
        <div className="announcement-container-live">

            <div id="carouselExample" className="carousel slide carousel-slide">
                <div className="carousel-inner">

                    <div className="carousel-item active announcement-item-holder">
                        {/* changes inside announcement container first */}
                        <Card
                            greeting="What's New"
                            title="Mines"
                            description="Play our newly launched Game and win cash prizes"
                            src="../src\Components\Images\Mines.png"
                        />
                    </div>

                    <div className="carousel-item">
                        {/* changes inside announcement container second */}
                        <Card
                            greeting="Upcoming"
                            title="Chess"
                            description="Play our newly launched Game and win cash prizes"
                            src="../src\Components\Images\Chess.jpg"
                        />

                    </div>
                    <div className="carousel-item">
                        {/* changes inside announcement container third*/}
                        <Card
                            greeting="Upcoming"
                            title="Callbreak"
                            description="Play our newly launched Game and win cash prizes"
                            src="../src\Components\Images\callbreak.png"
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
            </div>
        </div>
    )
}

export default AnnouncementContainerLive