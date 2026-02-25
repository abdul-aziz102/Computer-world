import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data
  const stats = [
    { value: '50K+', label: 'Active Students', icon: '👨‍🎓' },
    { value: '200+', label: 'Expert Courses', icon: '📚' },
    { value: '95%', label: 'Success Rate', icon: '⭐' }
  ];

  // Floating cards data
  const floatingCards = [
    {
      title: 'Design',
      courses: '50+ Courses',
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      position: 'top-10 right-10',
      delay: '0.5s'
    },
    {
      title: 'Marketing',
      courses: '30+ Courses',
      icon: '💼',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      position: 'bottom-20 left-0',
      delay: '1s'
    },
    {
      title: 'MS Office',
      courses: '20+ Courses',
      icon: '📊',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      position: 'top-1/3 -left-10',
      delay: '1.5s'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-white/90 text-sm font-medium">
                🚀 Enrollments Open for 2025
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
                Master in-demand IT skills with expert-led courses. Join 50,000+ students building successful tech careers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">Explore Courses</span>
                <ArrowRightIcon className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>

              <Link
                to="/enroll"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span>Enroll Now</span>
                <ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className={`relative h-[500px] lg:h-[600px] hidden lg:block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Main Course Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 lg:w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl p-6 lg:p-8 animate-float">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BookIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    Web Development
                  </h3>
                  <p className="text-sm text-blue-100">
                    Master HTML, CSS, JavaScript & React
                  </p>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-white/80 text-xs lg:text-sm">
                    <EyeIcon className="w-4 h-4" />
                    <span>2,450 Students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-xs lg:text-sm">
                    <ClockIcon className="w-4 h-4" />
                    <span>6 months · Beginner to Advanced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <FloatingCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

// Floating Card Component
const FloatingCard = ({ title, courses, icon, gradient, bgGradient, position, delay }) => (
  <div 
    className={`absolute ${position} w-40 lg:w-48 bg-gradient-to-br ${bgGradient} backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/20 shadow-xl p-3 lg:p-4 animate-float`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-2 lg:gap-3">
      <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${gradient} rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0`}>
        <span className="text-lg lg:text-xl">{icon}</span>
      </div>
      <div className="min-w-0">
        <div className="text-white font-semibold text-xs lg:text-sm truncate">
          {title}
        </div>
        <div className="text-white/60 text-xs truncate">
          {courses}
        </div>
      </div>
    </div>
  </div>
);

// Scroll Indicator Component
const ScrollIndicator = () => (
  <div className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center gap-1 lg:gap-2 text-white/40 hover:text-white/60 transition-colors cursor-pointer">
      <span className="text-xs lg:text-sm font-medium">Scroll to explore</span>
      <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
    </div>
  </div>
);

// Icon Components (you can replace these with your preferred icon library)
const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ArrowUpRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const BookIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default HeroBanner;