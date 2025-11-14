import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFileExcel,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";

const Quiz = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const quizzes = [
    {
      title: "HTML",
      questions: "10 questions",
      icon: <FaHtml5 className="text-3xl text-white" />,
      color: "bg-orange-500",
      link: "/html",
    },
    {
      title: "CSS",
      questions: "8 questions",
      icon: <FaCss3Alt className="text-3xl text-white" />,
      color: "bg-blue-500",
      link: "/css",
    },
    {
      title: "JavaScript",
      questions: "10 questions",
      icon: <FaJs className="text-3xl text-white" />,
      color: "bg-yellow-500",
      link: "/js",
    },
    {
      title: "Microsoft Excel",
      questions: "8 questions",
      icon: <FaFileExcel className="text-3xl text-white" />,
      color: "bg-green-600",
      link: "/excel",
    },
   
    {
      title: "Graphic Design",
      questions: "8 questions",
      icon: <FaPaintBrush className="text-3xl text-white" />,
      color: "bg-pink-500",
      link: "/graphic-design",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Test Your <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Challenge yourself with our interactive quizzes and track your progress
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Expandable Header */}
          <div className="mb-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-between group border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all">
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
                    className="h-6 w-6 text-blue-600 group-hover:text-white"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Interactive Quizzes
                  </h2>
                  <p className="text-gray-600">
                    {isExpanded ? "Click to collapse" : "Click to expand"}
                  </p>
                </div>
              </div>
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
                className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
          </div>

          {/* Quiz Grid */}
          {isExpanded && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz, index) => (
                  <Link
                    to={quiz.link}
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-left group border border-gray-100 block"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${quiz.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                      >
                        {quiz.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {quiz.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{quiz.questions}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
