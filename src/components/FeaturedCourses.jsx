import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FeaturedCourses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('featured-courses');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const courses = [
    {
      id: 1,
      title: "MS Office Complete Mastery",
      category: "MS Office",
      level: "Beginner",
      duration: "3 Months",
      students: "5,240",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      badge: "Popular",
      badgeColor: "bg-orange-500",
      gradient: "from-orange-500 to-red-500",
      skills: ["Word", "Excel", "PowerPoint"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      category: "Web Development",
      level: "Intermediate",
      duration: "6 Months",
      students: "8,450",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      badge: "Trending",
      badgeColor: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "4 Months",
      students: "6,120",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      badge: "New",
      badgeColor: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
      skills: ["SEO", "Social Media", "Analytics"]
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      category: "Graphic Design",
      level: "Beginner",
      duration: "4 Months",
      students: "4,890",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      badge: "Popular",
      badgeColor: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Photoshop", "Illustrator", "Figma"]
    },
    {
      id: 5,
      title: "Shopify Store Mastery",
      category: "E-commerce",
      level: "Intermediate",
      duration: "3 Months",
      students: "3,560",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      badge: "Trending",
      badgeColor: "bg-indigo-500",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Store Setup", "Marketing", "Sales"]
    },
    {
      id: 6,
      title: "Business English Communication",
      category: "Language",
      level: "All Levels",
      duration: "5 Months",
      students: "7,230",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
      badge: "Hot",
      badgeColor: "bg-red-500",
      gradient: "from-red-500 to-pink-500",
      skills: ["Speaking", "Writing", "Presentation"]
    }
  ];

  return (
    <div id="featured-courses" className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Featured Courses</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Start Learning
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Today
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most popular courses designed by industry experts to help you achieve your career goals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Badge */}
                <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  {course.badge}
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {course.level}
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <Link
                    to="/enroll"
                    className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${course.gradient} text-white text-xs font-semibold rounded-full`}>
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm font-bold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-sm font-medium">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    Free
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/courses"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            <span>View All Courses</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
