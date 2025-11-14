import { Link } from 'react-router-dom';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "MS Office Complete Course",
      category: "MS Office",
      level: "Beginner",
      image: "https://support.microsoft.com/images/en-us/ba7b1ade-c3a1-4b8f-aae9-d4f524e937b5",
      badge: "Popular"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      category: "Web Development",
      level: "Beginner",
      image: "https://www.zeeclick.com/wp-content/uploads/2021/09/Web-Development.jpeg",
      badge: "Trending"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Digital Marketing",
      level: "Beginner",
      image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_incoming&w=740&q=80",
      badge: "New"
    },
    {
      id: 4,
      title: "Graphic Design for Beginners",
      category: "Graphic Design",
      level: "Beginner",
      image: "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2020/02/the-best-applications-to-learn-as-a-graphics-designer.jpg?fit=1200%2C800&ssl=1",
      badge: "Popular"
    },
    {
      id: 5,
      title: "Shopify Store Creation Course",
      category: "Shopify",
      level: "Beginner",
      image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/shopify_20stores_1cb40842-dab6-4920-a234-4da36e79fc8a.png?v=1757359632",
      badge: "Trending"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600">
            Start your learning journey with our professional courses
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all"
          >
            
            <div className="relative overflow-hidden">
              <img
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                src={course.image}
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                {course.badge}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                  {course.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition">
                {course.title}
              </h3>

              {/* Bottom */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    Free Access
                  </div>

                  <div className="px-4 py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg text-sm hover:bg-blue-100 transition">
                    Enroll Now
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default FeaturedCourses;
