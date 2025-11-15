import React from 'react'
import HeroBanner from '../components/Herobanner'
import CoursesSection from '../components/CoursesSection'
import FeaturedCourses from '../components/FeaturedCourses'
import LearningPath from '../components/LearningPath'
import FeaturesShowcase from '../components/FeaturesShowcase.JSX'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <CoursesSection/>
        <FeaturedCourses />
        <LearningPath />
      <FeaturesShowcase/>
    </div>
  )
}

export default Home