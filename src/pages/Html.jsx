import React, { useState } from "react";

export default function HtmlQuiz() {
  const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"], answer: "Hyper Text Markup Language" },
    { question: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyper>"], answer: "<a>" },
    { question: "Which tag is used for inserting the largest heading?", options: ["<h6>", "<head>", "<h1>", "<heading>"], answer: "<h1>" },
    { question: "Which attribute specifies an image source?", options: ["link", "src", "href", "alt"], answer: "src" },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<b>"], answer: "<br>" },
    { question: "How can you make a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<list>"], answer: "<ol>" },
    { question: "How can you make a bulleted list?", options: ["<ol>", "<list>", "<ul>", "<dl>"], answer: "<ul>" },
    { question: "Which element is used to display an image?", options: ["<image>", "<pic>", "<src>", "<img>"], answer: "<img>" },
    { question: "Which HTML element is used to define important text?", options: ["<important>", "<i>", "<strong>", "<b>"], answer: "<strong>" },
    { question: "Which HTML tag is used to define a paragraph?", options: ["<p>", "<para>", "<pg>", "<text>"], answer: "<p>" },
    { question: "What does the <title> element define?", options: ["The main heading", "The page title shown in the browser tab", "The body text", "The footer"], answer: "The page title shown in the browser tab" },
    { question: "Which tag is used to define a table row?", options: ["<row>", "<tr>", "<td>", "<th>"], answer: "<tr>" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["font", "class", "style", "design"], answer: "style" },
    { question: "Which tag defines a list item?", options: ["<list>", "<li>", "<ul>", "<ol>"], answer: "<li>" },
    { question: "Which tag is used to create a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<cb>", "<input>"], answer: "<input type='checkbox'>" },
    { question: "Which HTML element is used for the smallest heading?", options: ["<h6>", "<small>", "<h5>", "<h7>"], answer: "<h6>" },
    { question: "How can you open a link in a new tab?", options: ["target='_blank'", "target='_newtab'", "target='open'", "target='tab'"], answer: "target='_blank'" },
    { question: "Which HTML element defines the document’s metadata?", options: ["<meta>", "<data>", "<info>", "<head>"], answer: "<meta>" },
    { question: "Which element represents the main content of a document?", options: ["<content>", "<main>", "<body>", "<section>"], answer: "<main>" },
    { question: "What is the correct HTML element to play a video?", options: ["<media>", "<video>", "<movie>", "<play>"], answer: "<video>" },
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
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">HTML Quiz</h1>

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
