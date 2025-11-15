import React from 'react'
import HeroBanner from '../components/Herobanner'
import CoursesSection from '../components/CoursesSection'
import FeaturedCourses from '../components/FeaturedCourses'
import LearningPath from '../components/LearningPath'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <CoursesSection/>
        <FeaturedCourses />
        <LearningPath />
        <Showcase/>
    </div>
  )
}

export default Home