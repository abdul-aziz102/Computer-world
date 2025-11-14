const MissionVision = () => {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: "Our Mission",
      description: "To bridge the digital skills gap by providing accessible, high-quality training that empowers individuals to thrive in the digital economy. We believe everyone deserves the opportunity to succeed in the modern workplace.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-purple-600">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: "Our Vision",
      description: "To become the leading IT training center globally, recognized for transforming lives through innovative education, practical skills development, and strong industry partnerships that guarantee career success.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;