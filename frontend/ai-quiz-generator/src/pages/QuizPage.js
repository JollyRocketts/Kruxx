import React, { useState, useEffect } from "react";

function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState(null);

  // Fetch quiz data from the Flask backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/quiz", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load quiz data. Please try again.");
        setLoading(false);
      });
  }, []);

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Submit quiz answers
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedAnswers),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        setError("Failed to submit answers. Please try again.");
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (results) {
    // Display the result after submission
    return (
      <div className="container">
        <h1 className="text-center text-xl font-bold mt-10">Quiz Results</h1>
        <p className="text-center mt-4 text-lg">
          You got {results.correct} out of {results.total} correct!
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-bold mt-10">Quiz</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        {quizData &&
          Object.keys(quizData.questions).map((questionId) => {
            const question = quizData.questions[questionId];
            return (
              <div key={questionId} className="mb-6">
                <h4 className="font-semibold">
                  {questionId}. {question.question}
                </h4>
                <div className="mt-2">
                  {question.options.map((option, idx) => (
                    <label key={idx} className="block mb-2">
                      <input
                        type="radio"
                        name={`question${questionId}`}
                        value={option}
                        onChange={() => handleAnswerChange(questionId, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
