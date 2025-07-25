import React, { useState } from "react";
import users from "../data/user";
import logo from "../assets/logo.png";

const user = users[0];

const Write = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handlePublish = () => {
    if (!title.trim() || !story.trim()) {
      alert("Please fill in both Title and Story!");
      return;
    }

    const newArticle = {
      id: Date.now(),
      title,
      story,
      author: user.name,
      date: new Date().toISOString(),
    };

    // Get existing articles from localStorage or empty array
    const existing = JSON.parse(localStorage.getItem("articles")) || [];

    // Add new article
    existing.push(newArticle);

    // Save updated articles array back to localStorage
    localStorage.setItem("articles", JSON.stringify(existing));

    // Clear inputs
    setTitle("");
    setStory("");

    alert("Article saved locally!");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex justify-between items-center px-6 py-4 bg-white max-w-5xl mx-auto">
        {/* Left Side: Logo and Draft */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-auto h-6" />
          <span className="text-xs text-gray-700">
            Draft in <span className="text-black">{user.name}</span>
          </span>
        </div>

        {/* Right Side: Publish button and icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePublish}
            className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-xl"
          >
            Publish
          </button>

          {/* Dots Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {/* Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967
                  8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0
                  1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714
                  0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1
                  1-5.714 0"
            />
          </svg>

          {/* User Circle */}
          <div className="w-8 h-8 bg-purple-700 text-white flex items-center justify-center rounded-full font-bold">
            U
          </div>
        </div>
      </nav>

      <section className="p-6 bg-white space-y-6">
        {/* Title input with plus icon */}
        <div className="relative w-full flex items-center group focus-within:visible">
          <div className="absolute left-6 invisible group-focus-within:visible">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            id="inspiration"
            name="inspiration"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-16 pl-20 px-4 text-lg placeholder:text-4xl hover:border-transparent focus:border-transparent focus:outline-none"
          />
        </div>

        {/* Story input with plus icon */}
        <div className="relative w-full flex items-center group focus-within:visible">
          <div className="absolute left-6 invisible group-focus-within:visible">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            id="whatHappened"
            name="whatHappened"
            placeholder="Tell your story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full px-3 pl-20 font-medium hover:border-transparent focus:border-transparent focus:outline-none"
          />
        </div>
      </section>
    </div>
  );
};

export default Write;
