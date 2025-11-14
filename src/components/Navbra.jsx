import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { FaFilePdf, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check registration status on component mount and storage changes
  useEffect(() => {
    const checkRegistration = () => {
      const registered = localStorage.getItem("isRegistered") === "true";
      setIsRegistered(registered);
      
      const savedData = localStorage.getItem("registrationData");
      if (savedData) {
        setRegistrationData(JSON.parse(savedData));
      }
    };
    
    checkRegistration();
    
    // Listen for storage changes and custom events
    window.addEventListener("storage", checkRegistration);
    window.addEventListener("userRegistered", checkRegistration);
    
    return () => {
      window.removeEventListener("storage", checkRegistration);
      window.removeEventListener("userRegistered", checkRegistration);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isRegistered");
    localStorage.removeItem("registrationData");
    setIsRegistered(false);
    setRegistrationData(null);
    navigate("/");
    closeMenu();
  };

  const generatePDF = () => {
    if (!registrationData) return;

    const doc = new jsPDF();
    
    // Add watermark
    doc.setFontSize(60);
    doc.setTextColor(240, 240, 240);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPUTER WORLD', 40, 140, { angle: 45 });
    
    // Reset styles for content
    doc.setTextColor(0, 0, 0);
    
    // Add header with logo
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 53, 147);
    doc.text('Computer World Academy', 15, 25);
    
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text('Student Registration Certificate', 15, 35);
    
    // Divider line
    doc.setDrawColor(40, 53, 147);
    doc.setLineWidth(0.5);
    doc.line(15, 40, 195, 40);
    
    // Main content
    let yPosition = 60;
    
    // Certificate text
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('This is to certify that', 105, yPosition, { align: 'center' });
    yPosition += 10;
    
    // Student name
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 53, 147);
    doc.text(registrationData.name || 'Student', 105, yPosition, { align: 'center' });
    yPosition += 15;
    
    // Details section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('has successfully registered for our English language program with the following details:', 105, yPosition, { align: 'center' });
    yPosition += 20;
    
    // Two column layout
    const leftColumnX = 30;
    const rightColumnX = 120;
    
    const renderField = (doc, x, y, label, value) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${label}:`, x, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value, x + 40, y);
    };
    
    // Personal Information
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Personal Information', leftColumnX, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    const personalFields = [
      { label: 'Email', value: registrationData.email },
      { label: 'Age', value: registrationData.age },
      { label: 'Gender', value: registrationData.gender },
      { label: 'Phone', value: registrationData.phone }
    ];
    
    personalFields.forEach(field => {
      if (field.value) {
        renderField(doc, leftColumnX, yPosition, field.label, field.value);
        yPosition += 8;
      }
    });
    
    // Education Information
    yPosition += 5;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Education Information', rightColumnX, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    const educationFields = [
      { label: 'Education', value: registrationData.education },
      { label: 'Learning Style', value: registrationData.learningStyle },
      { label: 'Level', value: registrationData.level }
    ];
    
    educationFields.forEach(field => {
      if (field.value) {
        renderField(doc, rightColumnX, yPosition, field.label, field.value);
        yPosition += 8;
      }
    });
    
    // Footer
    yPosition = 260;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for choosing Computer World Academy for your learning journey.', 105, yPosition, { align: 'center' });
    
    // Save the PDF
    doc.save(`ComputerWorld_Registration_${registrationData.name || 'Student'}.pdf`);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "ℹ️" },
    { href: "/courses", label: "Courses", icon: "📚" },
    { href: "/quiz", label: "Quiz", icon: "🧠" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-500/10 border-b border-blue-100/50 py-2"
            : "bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-500/5 border-b border-gray-100 py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo with enhanced animation */}
            <Link
              to="/"
              className="flex items-center space-x-3 group relative"
              onClick={closeMenu}
              onMouseEnter={() => setActiveHover("logo")}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-blue-100 rounded-full transition-all duration-300 ${
                    activeHover === "logo"
                      ? "scale-110 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`relative h-8 w-8 text-blue-600 transition-all duration-300 ${
                    activeHover === "logo"
                      ? "scale-125 rotate-12 text-blue-700"
                      : "scale-100 rotate-0"
                  }`}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                  <path d="M12 2a15.3 15.3 0 0 0 0 20" />
                  <path d="M9 9l-2 2 2 2" />
                  <path d="M15 9l2 2-2 2" />
                </svg>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Computer World
              </span>
              <div
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                  activeHover === "logo" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Desktop Navigation with enhanced hover effects */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative">
                  <Link
                    to={link.href}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group/navlink overflow-hidden ${
                      isActiveLink(link.href)
                        ? "text-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/20"
                        : "text-gray-700 hover:text-blue-600 hover:bg-white/80 hover:shadow-lg"
                    }`}
                    onMouseEnter={() => setActiveHover(link.href)}
                    onMouseLeave={() => setActiveHover(null)}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform transition-transform duration-500 ${
                        activeHover === link.href ? "scale-100" : "scale-0"
                      }`}
                    ></div>

                    {/* Icon */}
                    <span className="text-xs mr-2 opacity-70 group-hover/navlink:opacity-100 transition-opacity">
                      {link.icon}
                    </span>

                    {/* Text */}
                    <span className="relative z-10">{link.label}</span>

                    {/* Active indicator */}
                    {isActiveLink(link.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Action Buttons - Show different buttons based on registration status */}
            <div className="hidden md:flex items-center space-x-3">
              {isRegistered ? (
                <>
                  {/* Download PDF Button */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                    <button
                      onClick={generatePDF}
                      className="relative inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 h-11 px-6 py-3 rounded-full shadow-lg shadow-green-500/30 border border-green-500/20"
                    >
                      <FaFilePdf className="w-4 h-4" />
                      <span className="relative z-10">Download PDF</span>
                    </button>
                  </div>

                  {/* Logout Button */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                    <button
                      onClick={handleLogout}
                      className="relative inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 h-11 px-6 py-3 rounded-full shadow-lg shadow-red-500/30 border border-red-500/20"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      <span className="relative z-10">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Enroll Now Button (only show when not registered) */
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                  <Link
                    to="/enroll"
                    className="relative inline-flex items-center justify-center gap-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 h-11 px-8 py-3 rounded-full shadow-lg shadow-blue-500/30 border border-blue-500/20"
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <svg
                      className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white group"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-10"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/20 overflow-hidden transform transition-transform duration-500">
          <div className="p-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center space-x-4 px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isActiveLink(link.href)
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-2 border-blue-200 shadow-md"
                    : "text-gray-700 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-100"
                }`}
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen
                    ? `slideInRight 0.5s ease-out ${index * 100}ms both`
                    : "none",
                }}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
                {isActiveLink(link.href) && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}

            {/* Mobile Action Buttons - Show different buttons based on registration status */}
            {isRegistered ? (
              <>
                {/* Download PDF Button - Mobile */}
                <button
                  onClick={() => {
                    generatePDF();
                    closeMenu();
                  }}
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl shadow-green-500/40 hover:shadow-3xl hover:shadow-green-500/60 transform hover:scale-105 transition-all duration-300 border border-white/20"
                  style={{
                    animationDelay: "500ms",
                    animation: isMenuOpen
                      ? `slideInUp 0.5s ease-out 500ms both`
                      : "none",
                  }}
                >
                  <FaFilePdf className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>

                {/* Logout Button - Mobile */}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl shadow-red-500/40 hover:shadow-3xl hover:shadow-red-500/60 transform hover:scale-105 transition-all duration-300 border border-white/20"
                  style={{
                    animationDelay: "600ms",
                    animation: isMenuOpen
                      ? `slideInUp 0.5s ease-out 600ms both`
                      : "none",
                  }}
                >
                  <FaSignOutAlt className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              /* Enroll Now Button - Mobile (only show when not registered) */
              <Link
                to="/enroll"
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/60 transform hover:scale-105 transition-all duration-300 border border-white/20"
                onClick={closeMenu}
                style={{
                  animationDelay: "500ms",
                  animation: isMenuOpen
                    ? `slideInUp 0.5s ease-out 500ms both`
                    : "none",
                }}
              >
                <span>Enroll Now</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;