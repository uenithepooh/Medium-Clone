import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <div className="grid grid-cols-3 gap-4 px-40">
          {/**First column */}
          <div className="col-span-2 border-r-2 border-gray-300 p-4">
            First column
          </div>

          {/**Second column */}
          <div className="p-4">
            {/**Staff Picks */}
            <div></div>
            {/**Recommended topics */}
            {/**Who to follow */}
            {/**Reading List */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Reading list</h2>
              <p className="text-sm text-gray-600">
                Click the <span className="inline-block align-middle">
                  {/* Replace this with your actual icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2v12l6-3 6 3V2H2z"/>
                  </svg>
                </span> on any story to easily add it to your reading list or a custom list that you can share.
              </p>
            </div>
            {/**Footer Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-6">
              <a href="#">Help</a>
              <a href="#">Status</a>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
              <a href="#">Privacy</a>
              <a href="#">Rules</a>
              <a href="#">Terms</a>
              <a href="#">Text to speach</a>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
};
export default Home;
