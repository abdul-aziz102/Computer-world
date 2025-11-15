import React from 'react'
import CoursesSection from '../components/CoursesSection'
import FeaturedCourses from '../components/FeaturedCourses'

const Courses = () => {
  return (
    <>
    <section 
        className="pt-32 pb-12 px-4"
        style={{
          background: 'linear-gradient(135deg, hsl(215 100% 53% / .1), hsl(188 94% 43% / .1))'
        }}
      >
        <div className="container mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of industry-leading courses designed to advance your career
            </p>
          </div>
        </div>
        <CoursesSection />
        <FeaturedCourses />
      </section>
    </>
  )
}

export default Courses