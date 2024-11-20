import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizGenerator = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleGenerateQuiz = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text before generating the quiz.");
      return;
    }
  
    const file = new Blob([inputText], { type: "text/plain" });
    const formData = new FormData();
    formData.append("quiz", file, "quiz.txt");
  
    try {
      const response = await fetch("http://127.0.0.1:5000/quizup", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      
      if (response.ok && data.success) {
        navigate("/quiz");
      } else {
        alert(data.message || "Failed to generate quiz.");
      }
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("An error occurred while generating the quiz. Please try again.");
    }
  };
  
  
  return (
    <main className="py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center -mt-44">
        <textarea
          className="w-full border border-gray-300 rounded-md p-4 text-lg resize-none h-32"
          placeholder="Paste or type your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="flex justify-around mt-6 flex-wrap gap-4 w-1/2">
          <button
            className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500"
            onClick={() => alert("Summarization feature is not yet implemented.")}
          >
            Summarize
          </button>
          <button
            className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-500"
            onClick={handleGenerateQuiz}
          >
            Generate Quiz
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuizGenerator;
