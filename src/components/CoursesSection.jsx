import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      title: "MS Office",
      description: "Master Word, Excel, PowerPoint for productivity",
      gradient: "from-blue-500/10 to-blue-600/10",
      hoverGradient: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Web Development",
      description: "Build modern websites and applications",
      gradient: "from-purple-500/10 to-purple-600/10",
      hoverGradient: "from-purple-500 to-purple-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300">
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
      title: "Digital Marketing",
      description: "SEO, SEM, and social media strategies",
      gradient: "from-green-500/10 to-green-600/10",
      hoverGradient: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
        </svg>
      ),
      title: "Graphic Design",
      description: "Adobe suite and design principles",
      gradient: "from-pink-500/10 to-pink-600/10",
      hoverGradient: "from-pink-500 to-pink-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      title: "Business English",
      description: "Professional communication skills",
      gradient: "from-orange-500/10 to-orange-600/10",
      hoverGradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Enhanced Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">🎯 Learning Paths</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of professional training programs designed for 
            <span className="font-semibold text-blue-600"> career advancement</span> and 
            <span className="font-semibold text-purple-600"> skill mastery</span>
          </p>
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform-gpu ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${course.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 p-[2px]`}>
                <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`relative mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center group-hover:bg-gradient-to-br ${course.hoverGradient} transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    {course.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                  {course.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {course.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
                    style={{ width: '70%' }}
                  ></div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-105">
                  Explore Course
                </button>
              </div>
            </div>
          ))}

          {/* Enhanced CTA Card */}
          <div
            className={`group relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 transform-gpu overflow-hidden ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0'
            }`}
            style={{
              animationDelay: '600ms',
              animationFillMode: 'both'
            }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20 animate-pulse"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              <h3 className="font-heading font-bold text-2xl mb-3">
                Discover More
              </h3>
              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                Explore our complete catalog of specialized courses and certifications
              </p>
              
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 group/cta"
              >
                View All Courses
                <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;