import React from 'react'
import HeroBanner from '../components/Herobanner'
import CoursesSection from '../components/CoursesSection'
import FeaturedCourses from '../components/FeaturedCourses'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <CoursesSection/>
        <FeaturedCourses />
    </div>
  )
}

export default Home