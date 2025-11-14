import { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Full Stack Developer at Google",
      course: "Web Development Bootcamp",
      image: "https://i.pravatar.cc/100?img=1",
      content: "This platform completely transformed my career! The Web Development bootcamp gave me all the skills I needed to land my dream job at Google. The instructors are world-class and the projects are incredibly practical."
    },
    {
      name: "Robert Chen",
      role: "Data Scientist at Microsoft",
      course: "Machine Learning A-Z",
      image: "https://i.pravatar.cc/100?img=12",
      content: "The Machine Learning course exceeded all my expectations. The content is up-to-date, comprehensive, and taught by industry experts. I went from zero knowledge to building production ML models in just 3 months!"
    },
    {
      name: "Amanda Foster",
      role: "React Developer at Amazon",
      course: "React Complete Guide",
      image: "https://i.pravatar.cc/100?img=5",
      content: "Best investment I ever made in my education. The React course is incredibly detailed and the support from instructors is amazing. I got hired within 2 weeks of completing the course!"
    },
    {
      name: "David Wilson",
      role: "Cloud Engineer at Netflix",
      course: "AWS Solutions Architect",
      image: "https://i.pravatar.cc/100?img=8",
      content: "The AWS course prepared me perfectly for real-world cloud challenges. The hands-on labs and projects were exactly what I needed to advance my career in cloud computing."
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer at Apple",
      course: "UI/UX Design Masterclass",
      image: "https://i.pravatar.cc/100?img=11",
      content: "As a creative professional, I was amazed by how well the design course balanced theory with practical skills. The portfolio projects helped me showcase my work effectively."
    },
    {
      name: "Michael Brown",
      role: "Cybersecurity Analyst at Meta",
      course: "Ethical Hacking & Security",
      image: "https://i.pravatar.cc/100?img=15",
      content: "The cybersecurity course provided real-world scenarios that prepared me for actual security challenges. The instructors are industry professionals with current experience."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current testimonials to display (3 at a time)
  const getCurrentTestimonials = () => {
    const start = currentSlide;
    const end = start + 3;
    if (end <= testimonials.length) {
      return testimonials.slice(start, end);
    } else {
      return [...testimonials.slice(start), ...testimonials.slice(0, end - testimonials.length)];
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of successful students who transformed their careers
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getCurrentTestimonials().map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  src={testimonial.image}
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  Math.floor(currentSlide / 3) === index ? 'bg-blue-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;