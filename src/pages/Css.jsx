import React, { useState } from "react";

export default function CssQuiz() {
  const questions = [
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "bg-color"], answer: "background-color" },
    { question: "How do you add a comment in CSS?", options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "' this is a comment"], answer: "/* this is a comment */" },
    { question: "Which property controls the text size?", options: ["text-style", "font-size", "text-size", "font-style"], answer: "font-size" },
    { question: "How do you make text bold?", options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "style: bold;"], answer: "font-weight: bold;" },
    { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "text-font", "font-type"], answer: "font-family" },
    { question: "How do you select an element with id 'demo'?", options: [".demo", "#demo", "*demo", "demo"], answer: "#demo" },
    { question: "How do you select elements with class name 'test'?", options: ["test", "*test", ".test", "#test"], answer: ".test" },
    { question: "Which property is used to change the left margin?", options: ["padding-left", "margin-left", "indent", "left-margin"], answer: "margin-left" },
    { question: "How do you make a list without bullets?", options: ["list-style: none;", "list: none;", "bullet-points: none;", "list-type: no-bullet;"], answer: "list-style: none;" },
    { question: "Which property is used to change the text color?", options: ["text-color", "font-color", "color", "text-style"], answer: "color" },
    { question: "What is the default value of the position property?", options: ["relative", "fixed", "absolute", "static"], answer: "static" },
    { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform: capitalize;", "text-style: capital;", "transform: capitalize;", "font-variant: small-caps;"], answer: "text-transform: capitalize;" },
    { question: "Which property is used to create space between elements' border and inner content?", options: ["margin", "spacing", "padding", "border-space"], answer: "padding" },
    { question: "How do you apply multiple background images to an element?", options: ["background: url(img1), url(img2);", "background-image: url(img1), url(img2);", "background-images: url(img1) url(img2);", "multiple-background: url(img1), url(img2);"], answer: "background-image: url(img1), url(img2);" },
    { question: "Which value of display makes an element invisible?", options: ["hidden", "none", "invisible", "disable"], answer: "none" },
    { question: "How do you make a flexbox container?", options: ["display: flexbox;", "display: flex;", "display: block-flex;", "flex: container;"], answer: "display: flex;" },
    { question: "Which property is used to align flex items vertically?", options: ["align-content", "justify-content", "align-items", "vertical-align"], answer: "align-items" },
    { question: "How do you make text italic?", options: ["font-style: italic;", "text-decoration: italic;", "font: italic;", "style: italic;"], answer: "font-style: italic;" },
    { question: "Which property is used to create rounded corners?", options: ["border-round", "corner-radius", "border-radius", "round-corner"], answer: "border-radius" },
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
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">CSS Quiz</h1>

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