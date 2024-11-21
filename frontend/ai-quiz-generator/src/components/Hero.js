import React, { useState } from "react";
import { FaYoutube, FaLink } from "react-icons/fa"; // Icons for YouTube and Hyperlink
import { Link } from "react-router-dom";

const Hero = () => {
  const [mode, setMode] = useState("youtube"); // State for toggle button
  const [inputValue, setInputValue] = useState("");

  // Toggle between YouTube and Website modes
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "youtube" ? "website" : "youtube"));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="bg-orange-400 flex justify-center items-center text-white text-center pt-24 pb-56 m-5 rounded-xl">
      <div className="w-[60%] flex flex-col justify-center items-center space-y-6">
        <h1 className="text-7xl font-bold">Kruxx</h1>
        {/* Description (commented out for now) */}
        {/* <p className="w-2/3">Effortlessly generate quizzes and summarize text from various formats—transforming your content into engaging learning experiences</p> */}

        {/* 4 Upload Buttons */}
        <p className="text-xl mt-12 pt-6 pb-12 w-2/3 text-center font-bold">
          How would you like to summarize?
        </p>
        <div className="flex space-x-6 mt-6">
          <Link to="/uploadImage">
            <button className="bg-white text-black font-bold py-6 px-10 rounded-xl shadow-md hover:bg-gray-200 text-lg">
              Upload Image
            </button>
          </Link>
          <Link to="/uploadPdf">
            <button className="bg-white text-black font-bold py-6 px-10 rounded-xl shadow-md hover:bg-gray-200 text-lg">
              Upload PDF
            </button>
          </Link>
          <Link to="/uploadPPT">
            <button className="bg-white text-black font-bold py-6 px-10 rounded-xl shadow-md hover:bg-gray-200 text-lg">
              Upload PPT
            </button>
          </Link>
          <Link to="/uploadDoc">
            <button className="bg-white text-black font-bold py-6 px-10 rounded-xl shadow-md hover:bg-gray-200 text-lg">
              Upload DOC
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-6 w-2/3 pt-6">
          {/* Link Input Bar */}
          <div className="relative flex items-center w-full">
            {/* Toggle Button */}
            <button
              onClick={toggleMode}
              className="bg-white text-black p-4 rounded-l-full shadow-md flex items-center justify-center hover:bg-gray-200 transition duration-300"
            >
              {mode === "youtube" ? (
                <FaYoutube className="text-red-600 text-2xl" />
              ) : (
                <FaLink className="text-blue-600 text-2xl" />
              )}
            </button>
            {/* Input Field */}
            <input
              type="text"
              placeholder={
                mode === "youtube"
                  ? "Enter YouTube link..."
                  : "Enter website link..."
              }
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1 py-4 px-6 rounded-r-full text-black shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {inputValue && (
            <div className="flex justify-center">
              <button
                className="bg-black p-4 w-full max-w-md py-2 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                size="lg"
              >
                Summarize
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;