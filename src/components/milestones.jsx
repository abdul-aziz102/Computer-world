const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2015",
      description: "SkillHub founded with a vision to democratize digital education"
    },
    {
      year: "2017",
      description: "Reached 1,000 students milestone"
    },
    {
      year: "2019",
      description: "Expanded curriculum to include specialized courses"
    },
    {
      year: "2021",
      description: "Launched online learning platform"
    },
    {
      year: "2023",
      description: "Trained over 5,000 professionals across 20+ countries"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milestones that shaped our success story
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Year Circle */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200">
                <span className="font-bold text-blue-600 text-lg">
                  {milestone.year}
                </span>
              </div>
              
              {/* Description */}
              <div className="flex-1 pt-2">
                <p className="text-gray-900 text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;