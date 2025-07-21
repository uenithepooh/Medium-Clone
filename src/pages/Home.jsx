import React from "react";
import Navbar from "../components/Navbar";
import authors from "../data/author";
import articles from "../data/articles.js";
import {Link} from "react-router-dom";


const Home = () => {
  const topAuthors = authors.slice(0, 3);

  return (
    <div>
      <Navbar />
      <main >
        <div className="grid grid-cols-3 gap-4 px-60">
          {/**First column */}
          <div className="col-span-2 border-r border-gray-100 p-4 max-w-4xl">
            <div className="max-w-2xl">
                <nav className="sticky top-0 z-50">
                  <div className="inline-block border-b border-gray-100">
                    <ul className="inline-flex space-x-6 p-4 text-sm text-gray-600">
                      <li><a href="#" className="flex items-center hover:underline">
                        {/* Plus Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="w-4 h-4"
                        >
                          <path d="M8 1.5a.5.5 0 0 1 .5.5v5.5H14a.5.5 0 0 1 0 1H8.5V14a.5.5 0 0 1-1 0V8.5H2a.5.5 0 0 1 0-1h5.5V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      </a></li>
                    <li><a href="#home" className="hover:text-gray-900">For You</a></li>
                    <li><a href="#about" className="hover:text-gray-900">Following</a></li>
                    <li>
                      <a href="#services" className="hover:text-gray-900">Featured</a>
                      <span className="text-white bg-green-600 text-xs px-1.5 py-0.5 ml-1 rounded">New</span>
                    </li>
                    <li><a href="#contact" className="hover:text-gray-900">Technology</a></li>
                    <li><a href="#contact" className="hover:text-gray-900">Data Science</a></li>
                    <li><a href="#contact" className="hover:text-gray-900">Programming</a></li>
                  </ul>     
                  </div>

                </nav>

                <div className="space-y-6 max-w-2xl py-6 mx-auto">
                      {articles.map((article) => (
                        <div
                          key={article.id}
                          className="flex justify-between items-start border-b border-gray-100 pb-4"
                        >
                          <div className="flex justify-between items-start w-full">
                            {/* Left side - text */}
                            <div className="flex-1 pr-4">
                              {/* First line: In [tags] by [author] */}
                              <div className="flex">                              <img
                                src={article.author.profileImage}
                                alt={article.author.name}
                                className="object-cover rounded-full h-5 w-5 mr-4"
                              />
                              <p className="text-sm text-gray-600 mb-1">
                                In{' '}
                                <span className="font-base">
                                  {article.place}
                                </span>{' '}
                                by{' '}
                                <span className="font-semibold">{article.author.name}</span>
                              </p></div>


                              {/* Title */}
                              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                {article.title}
                              </h2>

                              {/* Subtitle */}
                              <p className="text-gray-600">{article.subtitle}</p>

                              {/**above line */}
                              <div className="py-4 flex justify-between items-center space-x-4">
                                {/* Left side: existing elements */}
                                <div className="flex items-center space-x-8">
                                    {article.type === 'Member-only story' && (
                                    <div className="flex items-center space-x-1 text-yellow-400">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                                        />
                                      </svg>
                                    </div>
                                  )}   

                                  <p className="text-sm text-gray-500">{article.createdAt}</p>

                                  <div className="flex items-center space-x-2">                              
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                      />
                                    </svg>
                                    <p className="text-sm text-gray-500">{article.likes}</p>
                                  </div>

                                  <div className="flex items-center space-x-2">                              
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                      />
                                    </svg>
                                    <p className="text-sm text-gray-500">{article.comments}</p>
                                  </div>
                                </div>

                                {/* Right side: icons */}
                                <div className="text-sm text-gray-700 font-medium flex space-x-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                              </div>
                            </div>

                            {/* Right side - cover image */}
                            <div className="w-36 flex-shrink-0">
                              <img
                                src={article.coverImage}
                                alt={article.title}
                                className="object-cover rounded-sm h-28 w-full"
                              />
                            </div>    
                          </div>                        
                        </div>                        
                      ))}                 
                    </div>
          </div></div>

          {/**Second column */}
          <div className="p-4">
            {/**Staff Picks */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Staff Picks</h2>
              <a href="#" className="text-sm text-gray-500 hover:underline">See the full list</a>
            </div>

            {/**Recommended topics */}
            <div className="my-8">
              <h2 className="text-lg font-semibold mb-2">Recommended topics</h2>
              <div className="my-6 flex flex-wrap gap-3">
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Self Improvement</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Machine Learning</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Writing</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Relationships</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Cryptocurrency</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Politics</button>
                <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">Productivity</button>
              </div>
              <a href="#" className="text-sm text-gray-500 hover:underline">See more topics</a>
            </div>

            {/**Who to follow */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Who to follow</h2>
              <div className="pb-6">
                    {topAuthors.map((author) => (
                      <div
                        key={author.id}
                        className="flex items-center justify-between bg-white rounded-xl py-3"
                      >
                        {/* Profile Image - Left */}
                        <div className="flex-shrink-0">
                          <img
                            src={author.profileImage}
                            alt={author.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>

                        {/* Name & Bio - Center */}
                        <div className="flex-1 px-4 text-left">
                        <Link to={`/authors/${author.id}`} className="font-semibold text-gray-900">
                          {author.name}
                        </Link>
                          <p className="text-sm text-gray-500 line-clamp-2">{author.bio}</p>
                        </div>

                        {/* Follow Button - Right */}
                        <div>
                          <button className="border border-black px-4 py-2 rounded-full text-sm">
                            Follow
                          </button>
                        </div>
                      </div>
                    ))}
              </div>
              <a href="#" className="text-sm text-gray-500 hover:underline">See more suggestions</a>
            </div>

            {/**Reading List */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Reading list</h2>
              <p className="text-sm text-gray-600">
                Click the <span className="inline-block align-middle">
                  {/* Replace this with your actual icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                </span> on any story to easily add it to your reading list or a custom list that you can share.
              </p>
            </div>
            {/**Footer Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-8">
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
