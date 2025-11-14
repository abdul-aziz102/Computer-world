import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.3) 100%), url("https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20multiple%20computer%20monitors%20displaying%20colorful%20code%20and%20programming%20interfaces%2C%20sleek%20minimalist%20desk%20setup%20with%20ambient%20blue%20and%20purple%20lighting%2C%20professional%20developer%20environment%20with%20clean%20organized%20cables%2C%20high-tech%20atmosphere%20with%20soft%20glowing%20screens%2C%20contemporary%20office%20space%20with%20plants%20and%20modern%20furniture%2C%20inspiring%20productive%20coding%20workspace%20with%20natural%20light%20from%20large%20windows%2C%20ultra-modern%20tech%20aesthetic%20with%20geometric%20patterns&width=1920&height=1080&seq=hero-bg-001&orientation=landscape")`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 font-semibold text-sm">🚀 Start Your IT Career Today</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master IT Skills
            <span className="block text-blue-400 mt-2">Build Your Future</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Learn Web Development, AI, Data Science, and more from industry experts. Get certified and advance your career with hands-on projects and real-world experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 whitespace-nowrap cursor-pointer"
            >
              Explore Courses
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 whitespace-nowrap cursor-pointer">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400 text-sm">Active Students</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-gray-400 text-sm">Expert Courses</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;