import React, { useState } from "react";

export default function Js() {
  const correctPassword = "12345"; // CHANGE PASSWORD HERE

  const [inputPassword, setInputPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordSubmit = () => {
    if (inputPassword === correctPassword) {
      setIsVerified(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password");
    }
  };

  const questions = [
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "What will typeof null return?", options: ["null", "object", "undefined", "number"], answer: "object" },
    { question: "Which method is used to add an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
    { question: "What is the correct way to write an IF statement in JavaScript?", options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"], answer: "if (i == 5)" },
    { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"], answer: "function myFunction()" },
    { question: "Which operator is used for strict equality comparison?", options: ["==", "===", "=", "!="], answer: "===" },
    { question: "What will '5' + 2 return?", options: ["7", "52", "Error", "undefined"], answer: "52" },
    { question: "Which method converts JSON string to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" },
    { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to previous object", "Refers to current object", "Refers to parent object", "Refers to global object"], answer: "Refers to current object" },
    { question: "Which function is used to execute code after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], answer: "setTimeout()" },
    { question: "What does the Array.map() method do?", options: ["Modifies the original array", "Creates a new array with results", "Filters array elements", "Sorts the array"], answer: "Creates a new array with results" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["// for single-line, /* */ for multi-line", "<!-- --> for comments", "# for comments", "** for comments"], answer: "// for single-line, /* */ for multi-line" },
    { question: "What is the result of Boolean('false')?", options: ["false", "true", "undefined", "Error"], answer: "true" },
    { question: "Which method removes the last element from an array?", options: ["push()", "pop()", "shift()", "remove()"], answer: "pop()" },
    { question: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Digital Object Management", "Document Order Model"], answer: "Document Object Model" },
    { question: "How do you check if a variable is an array?", options: ["typeof variable", "variable.isArray()", "Array.isArray(variable)", "variable instanceof Array"], answer: "Array.isArray(variable)" },
    { question: "What is the purpose of 'use strict' in JavaScript?", options: ["Makes code run faster", "Enables stricter parsing and error handling", "Allows using newer features", "Disables all warnings"], answer: "Enables stricter parsing and error handling" },
    { question: "Which method is used to select an HTML element by its ID?", options: ["document.querySelector()", "document.getElementById()", "document.getElementByID()", "document.selectId()"], answer: "document.getElementById()" },
    { question: "What will console.log(0.1 + 0.2 === 0.3) return?", options: ["true", "false", "undefined", "Error"], answer: "false" },
    { question: "Which ES6 feature allows extracting values from arrays or objects?", options: ["Spread operator", "Destructuring", "Arrow functions", "Template literals"], answer: "Destructuring" },
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

      {/* PASSWORD SCREEN */}
      {!isVerified && (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Enter Password</h2>

          <input
            type="password"
            placeholder="Enter quiz password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl mb-4"
          />

          {passwordError && (
            <p className="text-red-500 text-sm mb-3">{passwordError}</p>
          )}

          <button
            onClick={handlePasswordSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Continue
          </button>
        </div>
      )}

      {/* QUIZ SCREEN */}
      {isVerified && (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border border-gray-200">
          
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">JavaScript Quiz</h1>

          {!submitted ? (
            <>
              <div className="w-full bg-gray-200 h-2 rounded-full mb-5">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Q{current + 1}. {questions[current].question}
              </h2>

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
      )}
    </div>
  );
}
