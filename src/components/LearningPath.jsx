import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const LearningPath = () => {
  const [activePath, setActivePath] = useState(0);

  const paths = [
    {
      title: "Beginner Friendly",
      icon: "🛠️",
      duration: "2-4 Months",
      skills: ["Basic Computer", "MS Office", "Email & Internet"],
      color: "from-green-500 to-emerald-500",
      courses: ["Computer Basics", "MS Office Complete", "Internet Fundamentals"]
    },
    {
      title: "Intermediate Level",
      icon: "💻",
      duration: "4-6 Months",
      skills: ["Web Development", "Graphic Design", "Digital Marketing"],
      color: "from-blue-500 to-cyan-500",
      courses: ["HTML/CSS/JS", "Adobe Photoshop", "SEO Basics"]
    },
    {
      title: "Advanced Specialization",
      icon: "🚀",
      duration: "6-8 Months",
      skills: ["Full Stack Development", "Graphic Design", "E-commerce"],
      color: "from-purple-500 to-pink-500",
      courses: ["React/Node.js", "Adobe Illustrator", "Shopify Mastery"]
    },
    {
      title: "Professional Mastery",
      icon: "🏆",
      duration: "8-12 Months",
      skills: ["Advanced Projects", "Freelancing", "Job Placement"],
      color: "from-orange-500 to-red-500",
      courses: ["Real Projects", "Portfolio Building", "Interview Prep"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              🎯 Your Career Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Structured <span className="text-blue-600">Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our proven path from beginner to professional with guided steps and real-world projects
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {paths.map((path, index) => (
            <motion.button
              key={index}
              onClick={() => setActivePath(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                activePath === index
                  ? `bg-gradient-to-r ${path.color} text-white shadow-2xl transform -translate-y-2`
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-3xl mb-4">{path.icon}</div>
              <h3 className="font-bold text-xl mb-2">{path.title}</h3>
              <div className={`text-sm font-semibold ${
                activePath === index ? 'text-white/80' : 'text-gray-500'
              }`}>
                {path.duration}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detailed Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">{paths[activePath].icon}</span>
                  Skills You'll Learn
                </h4>
                <div className="space-y-3">
                  {paths[activePath].skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  📚 Included Courses
                </h4>
                <div className="space-y-3">
                  {paths[activePath].courses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-700">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-gray-900 text-lg">Ready to start this path?</h5>
                  <p className="text-gray-600">Join thousands of students on this learning journey</p>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                  Enroll Now - {paths[activePath].duration}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LearningPath;