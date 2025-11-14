import JourneyTimeline from "../components/milestones";
import MissionVision from "../components/MissionVision";

const About = () => {
  return (
    <>
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals with cutting-edge digital skills for the modern workplace since 2015
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { number: '50K+', label: 'Students Trained' },
              { number: '200+', label: 'Expert Courses' },
              { number: '95%', label: 'Success Rate' },
              { number: '8', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <MissionVision />
    <JourneyTimeline />
    </>
  );
};

export default About;