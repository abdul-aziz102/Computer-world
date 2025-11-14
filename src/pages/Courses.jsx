import { useState } from 'react';

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    'All Courses',
    'MS Office',
    'Web Development',
    'Digital Marketing',
    'Graphic Design',
    'English'
  ];

  const courses = [
    {
      title: "Microsoft Office Mastery",
      description: "Master Word, Excel, PowerPoint, and Outlook for professional productivity.",
      duration: "6 weeks",
      price: "$299",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      category: "MS Office"
    },
    {
      title: "Full Stack Web Development",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
      duration: "16 weeks",
      price: "$1,299",
      level: "Pro",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      category: "Web Development"
    },
    {
      title: "Digital Marketing Bootcamp",
      description: "SEO, SEM, social media marketing, email campaigns, and analytics.",
      duration: "8 weeks",
      price: "$499",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Graphic Design Essentials",
      description: "Adobe Photoshop, Illustrator, InDesign, and design theory for visual communication.",
      duration: "10 weeks",
      price: "$599",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      category: "Graphic Design"
    },
    {
      title: "Business English Communication",
      description: "Professional English for emails, presentations, meetings, and networking.",
      duration: "8 weeks",
      price: "$399",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
      category: "English"
    },
    {
      title: "Advanced Excel & Data Analytics",
      description: "Power Query, Power Pivot, VBA macros, and advanced data visualization.",
      duration: "6 weeks",
      price: "$449",
      level: "Pro",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "MS Office"
    },
    {
      title: "Frontend Development with React",
      description: "Build modern, responsive web applications with React and modern tools.",
      duration: "10 weeks",
      price: "$799",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      category: "Web Development"
    },
    {
      title: "Social Media Marketing Pro",
      description: "Advanced strategies for Instagram, Facebook, LinkedIn, TikTok, and Twitter.",
      duration: "6 weeks",
      price: "$549",
      level: "Pro",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      category: "Digital Marketing"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesFilter = activeFilter === 'All Courses' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-12 px-4"
        style={{
          background: 'linear-gradient(135deg, hsl(215 100% 53% / .1), hsl(188 94% 43% / .1))'
        }}
      >
        <div className="container mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of industry-leading courses designed to advance your career
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 px-4 rounded-full ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input 
                type="text" 
                className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 rounded-full"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                      course.level === 'Pro' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-clock h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <span className="font-semibold text-blue-600 text-lg">
                      {course.price}
                    </span>
                  </div>

                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 h-10 px-4 py-2 w-full rounded-full transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;