import React, { useState } from "react";

export default function GraphicDesignQuiz() {
  const questions = [
    { question: "What does RGB stand for in color models?", options: ["Red, Green, Blue", "Red, Gray, Black", "Royal, Green, Brown", "Rich, Gold, Blue"], answer: "Red, Green, Blue" },
    { question: "Which design principle refers to the arrangement of elements to create visual stability?", options: ["Balance", "Contrast", "Alignment", "Proximity"], answer: "Balance" },
    { question: "What is the term for the space between lines of text?", options: ["Kerning", "Leading", "Tracking", "Spacing"], answer: "Leading" },
    { question: "Which file format supports transparency and is commonly used for web graphics?", options: [".jpg", ".png", ".bmp", ".tiff"], answer: ".png" },
    { question: "What is the golden ratio commonly represented by?", options: ["1:1.618", "1:1.414", "1:2.0", "1:1.333"], answer: "1:1.618" },
    { question: "Which color scheme uses colors that are opposite each other on the color wheel?", options: ["Analogous", "Monochromatic", "Complementary", "Triadic"], answer: "Complementary" },
    { question: "What does 'DPI' stand for in print design?", options: ["Dots Per Inch", "Design Precision Index", "Digital Pixel Input", "Drawing Point Interface"], answer: "Dots Per Inch" },
    { question: "Which design software is primarily vector-based?", options: ["Photoshop", "Illustrator", "InDesign", "Lightroom"], answer: "Illustrator" },
    { question: "What is the term for adjusting the space between specific character pairs?", options: ["Leading", "Tracking", "Kerning", "Spacing"], answer: "Kerning" },
    { question: "Which principle refers to the path the viewer's eye takes through a design?", options: ["Hierarchy", "Movement", "Rhythm", "Unity"], answer: "Movement" },
    { question: "What does CMYK stand for in color printing?", options: ["Cyan, Magenta, Yellow, Key", "Color, Magenta, Yellow, Black", "Cyan, Magenta, Yellow, Black", "Creative, Mixed, Yellow, Key"], answer: "Cyan, Magenta, Yellow, Key" },
    { question: "Which design element refers to the lightness or darkness of a color?", options: ["Hue", "Saturation", "Value", "Temperature"], answer: "Value" },
    { question: "What is the term for a design that uses only one color in different shades and tints?", options: ["Monochromatic", "Analogous", "Complementary", "Tetradic"], answer: "Monochromatic" },
    { question: "Which principle creates visual interest through differences in elements?", options: ["Contrast", "Repetition", "Alignment", "Proximity"], answer: "Contrast" },
    { question: "What is the rule of thirds in composition?", options: ["Dividing layout into 9 equal parts", "Using three colors maximum", "Three font rule", "Three element limit"], answer: "Dividing layout into 9 equal parts" },
    { question: "Which file format is best for logos and illustrations that need to scale?", options: [".jpg", ".png", ".svg", ".gif"], answer: ".svg" },
    { question: "What is the term for the visual weight of elements in a design?", options: ["Balance", "Hierarchy", "Scale", "Proportion"], answer: "Balance" },
    { question: "Which design software is primarily used for photo editing?", options: ["Illustrator", "InDesign", "Photoshop", "Figma"], answer: "Photoshop" },
    { question: "What does 'UI' stand for in design?", options: ["User Interface", "Universal Integration", "User Integration", "Universal Interface"], answer: "User Interface" },
    { question: "Which principle groups related elements together in a design?", options: ["Alignment", "Proximity", "Contrast", "Repetition"], answer: "Proximity" },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option) => {
    setSelected({ ...selected, [current]: option });
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected({});
    setScore(0);
    setSubmitted(false);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border border-gray-200">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Graphic Design Quiz</h1>

        {!submitted ? (
          <>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-5">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Question */}
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Q{current + 1}. {questions[current].question}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {questions[current].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-3 rounded-xl text-left border transition-all duration-200
                    ${
                      selected[current] === option
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-blue-50 border-gray-300"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className={`px-5 py-2 rounded-lg font-semibold transition
                  ${
                    current === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                Previous
              </button>

              {current === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              You scored{" "}
              <span className="text-blue-600 font-bold">{score}</span> out of{" "}
              {questions.length} 🎉
            </h2>

            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}