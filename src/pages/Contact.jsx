import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-gray-900">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6 relative">
                    Contact Information
                    <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Reach out to us through any of these channels or use the contact form. We're here to help you succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:scale-[1.02]">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Visit Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Training Street<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:scale-[1.02]">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Call Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        +1 (234) 567-890<br />
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:scale-[1.02]">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        info@skillhub.com<br />
                        support@skillhub.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6732913423474!2d-73.98784368459395!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="SkillHub Location" 
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Gradient Border Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-t-2xl"></div>
                
                <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 mb-6 bg-green-50 border border-green-200 rounded-xl text-green-800 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-xl text-red-800 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 flex-shrink-0">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="font-medium">Something went wrong. Please try again.</span>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 hover:border-gray-300 focus:shadow-lg"
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 hover:border-gray-300 focus:shadow-lg"
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 hover:border-gray-300 focus:shadow-lg"
                      id="phone" 
                      name="phone" 
                      placeholder="+1 (234) 567-890" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Course Interest */}
                  <div className="group">
                    <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                      Course Interest
                    </label>
                    <select 
                      id="courseInterest"
                      name="courseInterest"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 hover:border-gray-300 focus:shadow-lg appearance-none cursor-pointer"
                      value={formData.courseInterest}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a course</option>
                      <option value="office">MS Office</option>
                      <option value="web">Web Development</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="design">Graphic Design</option>
                      <option value="english">Business English</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                      Message *
                    </label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 hover:border-gray-300 focus:shadow-lg resize-vertical min-h-[120px]"
                      id="message" 
                      name="message" 
                      placeholder="Tell us how we can help you..." 
                      required 
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    className={`w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default ContactSection;