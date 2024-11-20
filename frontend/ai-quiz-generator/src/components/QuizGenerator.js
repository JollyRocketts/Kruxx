import React from "react";

const QuizGenerator = () => {
  return (
    <main className="py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center -mt-44">
        <textarea
          className="w-full border border-gray-300 rounded-md p-4 text-lg resize-none h-32"
          placeholder="Paste or type your text here..."
        ></textarea>
        <div className="flex justify-around mt-6 flex-wrap gap-4 w-1/2">
          <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500">
            Summarize
          </button>
          <button className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-500">
            Generate Quiz
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuizGenerator;
