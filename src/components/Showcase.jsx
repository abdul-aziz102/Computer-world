import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Showcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "🎯",
      title: "Industry-Relevant Curriculum",
      description: "Learn skills that employers actually want with our constantly updated curriculum",
      details: [
        "Updated every 3 months",
        "Based on job market trends",
        "Real-world project focus"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
      details: [
        "5+ years industry experience",
        "Active professionals",
        "Personalized mentorship"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "💻",
      title: "Hands-On Projects",
      description: "Build real projects that you can showcase in your portfolio",
      details: [
        "50+ practical projects",
        "Portfolio building",
        "GitHub integration"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🤝",
      title: "Career Support",
      description: "Get job-ready with our comprehensive career support system",
      details: [
        "Resume building",
        "Interview preparation",
        "Job placement assistance"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🔄",
      title: "Flexible Learning",
      description: "Learn at your own pace with our flexible schedule options",
      details: [
        "Self-paced learning",
        "Live session recordings",
        "Lifetime access"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access your courses anytime, anywhere with our mobile-optimized platform",
      details: [
        "Mobile app access",
        "Offline downloads",
        "Sync across devices"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              ✨ Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learning Experience <span className="text-blue-600">Like No Other</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built everything you need to succeed in your tech career journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-2xl transform -translate-y-1`
                    : 'bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className={`text-sm ${
                  activeFeature === index ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Feature Details */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{features[activeFeature].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-600">
                {features[activeFeature].description}
              </p>
            </div>

            <div className="space-y-4">
              {features[activeFeature].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="font-semibold text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 flex justify-center space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who transformed their learning experience with our innovative approach
            </p>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;