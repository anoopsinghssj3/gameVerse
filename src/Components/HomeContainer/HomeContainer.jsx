import React from 'react'

import './HomeContainer.css'
import NavContainer from './NavContainer/NavContainer'
import AnnouncementContainer from './AnnouncementContainer/AnnouncementContainer'
import '../Style/Style.css'


function HomeContainer() {
    return (<>
        <div className="home-container">
            <NavContainer />
            <AnnouncementContainer />


        </div>
    </>
    )
}
export default HomeContainer