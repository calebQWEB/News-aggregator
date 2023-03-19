import React from 'react'
import AllNews from '../../Component/AllNews/AllNews'
import HealthNews from '../../Component/HealthNews/HealthNews'
import ScienceNews from '../../Component/ScienceNews/ScienceNews'

const Home = () => {
    return (
        <div>
            <AllNews />
            <HealthNews />
            <ScienceNews />
        </div>
    )
}

export default Home