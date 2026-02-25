import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaFileExcel, FaPaintBrush } from "react-icons/fa";

const Quiz = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quizzes = [
    {
      title: "HTML",
      questions: "10 questions",
      icon: <FaHtml5 className="text-4xl" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      link: "/html",
      difficulty: "Beginner",
      duration: "15 min",
      description: "Test your HTML knowledge with semantic markup and structure"
    },
    {
      title: "CSS",
      questions: "8 questions",
      icon: <FaCss3Alt className="text-4xl" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link: "/css",
      difficulty: "Beginner",
      duration: "12 min",
      description: "Master CSS styling, layouts, and responsive design concepts"
    },
    {
      title: "JavaScript",
      questions: "10 questions",
      icon: <FaJs className="text-4xl" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      link: "/js",
      difficulty: "Intermediate",
      duration: "20 min",
      description: "Challenge yourself with JavaScript fundamentals and ES6+"
    },
    {
      title: "Microsoft Excel",
      questions: "8 questions",
      icon: <FaFileExcel className="text-4xl" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      link: "/excel",
      difficulty: "Beginner",
      duration: "15 min",
      description: "Evaluate your Excel skills from basics to advanced formulas"
    },
    {
      title: "Graphic Design",
      questions: "8 questions",
      icon: <FaPaintBrush className="text-4xl" />,
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
      link: "/graphic-design",
      difficulty: "Beginner",
      duration: "12 min",
      description: "Test your design principles and creative thinking"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Test Your Knowledge</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Challenge Your
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take our interactive quizzes and track your progress in various IT domains
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Stats Bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: "📝", label: "Total Quizzes", value: "5+" },
              { icon: "👥", label: "Participants", value: "12K+" },
              { icon: "⭐", label: "Avg. Score", value: "85%" },
              { icon: "🏆", label: "Certificates", value: "8K+" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quiz Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${quiz.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${quiz.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {quiz.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {quiz.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {quiz.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>{quiz.questions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{quiz.duration}</span>
                    </div>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 bg-gradient-to-r ${quiz.color} text-white text-xs font-semibold rounded-full`}>
                      {quiz.difficulty}
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={quiz.link}
                    className={`block w-full py-3 px-6 bg-gradient-to-r ${quiz.color} text-white font-semibold rounded-xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Start Quiz
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${quiz.color} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Test Your Skills?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Complete all quizzes and earn certificates to showcase your expertise
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/courses"
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Browse Courses
                  </Link>
                  <Link
                    to="/enroll"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
