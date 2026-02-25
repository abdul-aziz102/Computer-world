import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { FaFilePdf, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check registration status
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("isRegistered");
    localStorage.removeItem("registrationData");
    setIsRegistered(false);
    setRegistrationData(null);
    setIsDropdownOpen(false);
    navigate("/");
    closeMenu();
  };

  const generatePDF = () => {
    if (!registrationData) return;

    const doc = new jsPDF();

    doc.setFontSize(60);
    doc.setTextColor(240, 240, 240);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPUTER WORLD', 40, 140, { angle: 45 });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(37, 99, 235);
    doc.text('Computer World Academy', 15, 25);

    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text('Student Registration Certificate', 15, 35);

    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(15, 40, 195, 40);

    let yPosition = 60;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('This is to certify that', 105, yPosition, { align: 'center' });
    yPosition += 10;

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(37, 99, 235);
    doc.text(registrationData.name || 'Student', 105, yPosition, { align: 'center' });
    yPosition += 15;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('has successfully registered for our program with the following details:', 105, yPosition, { align: 'center' });
    yPosition += 20;

    const leftColumnX = 30;
    const rightColumnX = 120;

    const renderField = (doc, x, y, label, value) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${label}:`, x, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value, x + 40, y);
    };

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

    yPosition = 260;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for choosing Computer World Academy for your learning journey.', 105, yPosition, { align: 'center' });

    doc.save(`ComputerWorld_Registration_${registrationData.name || 'Student'}.pdf`);
  };

  const getUserInitial = () => {
    if (registrationData?.email) {
      return registrationData.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/quiz", label: "Quiz" },
    { href: "/contact", label: "Contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-white/90 backdrop-blur-md shadow-md py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <img
                src="/Cwicon.png"
                alt="Computer World Logo"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Computer World
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActiveLink(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {isRegistered ? (
                <>
                  {/* Download PDF Button */}
                  <button
                    onClick={generatePDF}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <FaFilePdf className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>

                  {/* User Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      {getUserInitial()}
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="p-4 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-800 truncate">
                            {registrationData?.name || "User"}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {registrationData?.email}
                          </p>
                        </div>

                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to="/enroll"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <span>Enroll Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

        <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            {isRegistered ? (
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    generatePDF();
                    closeMenu();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md"
                >
                  <FaFilePdf className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center">
                      {getUserInitial()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {registrationData?.name || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {registrationData?.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/enroll"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md mt-4"
                onClick={closeMenu}
              >
                <span>Enroll Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
