import React from 'react'
import BestMovie from './BestMovie'
import HomeCarosel from './HomeCarosel'
import LatestNews from './LatestNews'
import UpcomingMovie from './UpcomingMovie/UpcomingMovie'
import FeaturedEvent from './FeaturedEvent'
function HomePage() {
    
    return (
        <div className='homepage'>
            <HomeCarosel/>
            <UpcomingMovie/>
            <BestMovie/>
            <LatestNews/>
            <FeaturedEvent/>
        </div>
    )
}

export default HomePage
