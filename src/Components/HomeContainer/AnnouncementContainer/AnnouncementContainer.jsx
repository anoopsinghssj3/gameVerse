import React from 'react'
import './AnnouncementContainer.css'
import AnnouncementContainerLive from './AnnouncementContainerLive/AnnouncementContainerLive'
import AnnouncementContainerNext from './AnnouncementContainerNext/AnnouncementContainerNext'

function AnnouncementContainer() {
    return (<>

        <div className="announcement-container">
            <AnnouncementContainerLive />
            <AnnouncementContainerNext />
        </div>
    </>)
}

export default AnnouncementContainer