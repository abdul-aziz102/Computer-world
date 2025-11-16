import React, { useState } from "react";

export default function ExcelQuiz() {
  const [password, setPassword] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);

  const correctPassword = "12345"; // Change anytime

  // Questions
  const questions = [
    { question: "What is the file extension for Excel workbooks?", options: [".xls", ".xlsx", ".excel", ".sheet"], answer: ".xlsx" },
    { question: "Which function adds all numbers in a range of cells?", options: ["TOTAL()", "SUM()", "ADD()", "CALCULATE()"], answer: "SUM()" },
    { question: "What is the shortcut to create a new workbook in Excel?", options: ["Ctrl + N", "Ctrl + W", "Ctrl + B", "Ctrl + E"], answer: "Ctrl + N" },
    { question: "Which tab contains the PivotTable feature?", options: ["Home", "Insert", "Data", "Formulas"], answer: "Insert" },
    { question: "What does VLOOKUP function do?", options: ["Looks up values vertically", "Looks up values horizontally", "Validates data", "Creates vertical lines"], answer: "Looks up values vertically" },
    { question: "Which key is used to edit the active cell?", options: ["F1", "F2", "F4", "Enter"], answer: "F2" },
    { question: "What is the maximum number of rows in modern Excel versions?", options: ["65,536", "1,048,576", "16,384", "262,144"], answer: "1,048,576" },
    { question: "Which function checks if a condition is met and returns one value if TRUE, another if FALSE?", options: ["IF()", "CHECK()", "CONDITION()", "TEST()"], answer: "IF()" },
    { question: "What does 'Ctrl + ;' shortcut do in Excel?", options: ["Inserts current time", "Inserts current date", "Copies formula", "Shows formulas"], answer: "Inserts current date" },
    { question: "Which chart type is best for showing trends over time?", options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"], answer: "Line Chart" },
    { question: "What is the purpose of the 'Freeze Panes' feature?", options: ["Locks selected rows/columns", "Stops calculations", "Prevents editing", "Hides data"], answer: "Locks selected rows/columns" },
    { question: "Which function combines text from multiple cells?", options: ["JOIN()", "COMBINE()", "CONCATENATE()", "MERGE()"], answer: "CONCATENATE()" },
    { question: "What does the '$' symbol do in cell references?", options: ["Makes reference absolute", "Indicates currency", "Marks important cells", "Creates tables"], answer: "Makes reference absolute" },
    { question: "Which feature automatically fills data based on a pattern?", options: ["AutoComplete", "Flash Fill", "Quick Analysis", "Data Validation"], answer: "Flash Fill" },
    { question: "What is the shortcut to open the Format Cells dialog box?", options: ["Ctrl + 1", "Ctrl + F", "Ctrl + D", "Ctrl + B"], answer: "Ctrl + 1" },
    { question: "Which function counts cells that contain numbers?", options: ["COUNT()", "COUNTA()", "COUNTIF()", "SUM()"], answer: "COUNT()" },
    { question: "What does PivotTable help you do?", options: ["Create pivot charts", "Summarize and analyze data", "Protect worksheets", "Format tables"], answer: "Summarize and analyze data" },
    { question: "Which key combination applies bold formatting?", options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + D"], answer: "Ctrl + B" },
    { question: "What is the purpose of Data Validation?", options: ["Restricts what data can be entered", "Validates formulas", "Checks for duplicates", "Protects workbook"], answer: "Restricts what data can be entered" },
    { question: "Which function returns the current date and time?", options: ["TODAY()", "NOW()", "DATE()", "CURRENT()"], answer: "NOW()" },
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

  const progress = ((current + 1) / questions.length) * 100;

  // Password Screen
  if (!isAllowed) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Enter Password</h2>

          <input
            type="password"
            placeholder="Enter Quiz Password"
            className="w-full p-3 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => {
              if (password === correctPassword) {
                setIsAllowed(true);
              } else {
                alert("Wrong Password!");
              }
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6 mt-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Microsoft Excel Quiz</h1>

        {!submitted ? (
          <>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-5">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>

            <h2 className="text-lg font-semibold mb-4">{`Q${current + 1}. ${questions[current].question}`}</h2>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-3 rounded-xl border transition-all
                    ${
                      selected[current] === option
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-blue-50"
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
                className={`px-5 py-2 rounded-lg ${
                  current === 0 ? "bg-gray-300 text-gray-500" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>

              {current === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">You scored {score} out of {questions.length} 🎉</h2>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
