import React from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import authors from '../data/author';
import user from '../data/user';
import Navbar from "../components/Navbar";
import articles from '../data/articles';


const AuthorDetail = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  const authorArticles = articles.filter((article) => article.author?.id === id);

  const email = user[0].mail;
  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    const visible = name.slice(0,2);
    return `${visible}***@${domain}`;
;
  }

  if (!author) {
    return <div className="p-6">Author not found</div>;
  }

  return (
    <div>
        <Navbar />
        <main>
            <div className="grid grid-cols-3 gap-4 px-60">
                {/**First column */}
                <div className="col-span-2 border-r border-gray-100 p-4 max-w-4xl ">
                    <div className="p-6 max-w-2xl mx-auto">
                        <div className='flex justify-between'>
                            <h1 className="text-4xl font-bold">{author.name}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            </div>
                        {/*Navbar */}
                        <nav className="border-b border-gray-100 pt-5 z-50">
                            <div className="inline-block ">
                                <ul className="inline-flex space-x-6 p-4 text-sm text-gray-600">
                                    <li>
                                        <button
                                        onClick={() => setActiveTab("home")}
                                        className={`hover:text-gray-700 ${
                                            activeTab === "home" ? "underline text-gray-700" : ""
                                        }`}
                                        >
                                        Home
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        onClick={() => setActiveTab("about")}
                                        className={`hover:text-gray-700 ${
                                            activeTab === "about" ? "underline text-gray-700" : ""
                                        }`}
                                        >
                                        About
                                        </button>
                                    </li>
                                </ul>     
                            </div>
                        </nav>
                        <div className="mt-6 px-4 max-w-2xl mx-auto">
                            {activeTab === "home" && (
                                <div>
                                    <div className="mt-8">
                                        {authorArticles.length === 0 ? (
                                            <p>No articles written yet.</p>
                                            ) : (
                                            <div className="space-y-6">
                                                {authorArticles.map((article) => (
                                                    <div key={article.id} className="p-4 border-b border-gray">
                                                    <div className="flex justify-between items-start w-full">
                                                        {/* Left side - text */}
                                                        <div className="flex-1 pr-4">
                                                            {/* First line: In [tags] by [author] */}
                                                            <div className="flex items-center mb-4">
                                                            <img
                                                            src={article.author.profileImage}
                                                            alt={article.author.name}
                                                            className="object-cover rounded-full h-5 w-5 mr-2"
                                                            />
                                                            <p className="text-sm text-gray-600">
                                                            In <span className="font-base">{article.place}</span> by{' '}
                                                            <span className="font-semibold">{article.author.name}</span>
                                                            </p>
                                                            </div>

                                                            {/* Title */}
                                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>

                                                            {/* Subtitle */}
                                                            <p className="text-gray-600 mb-4">{article.subtitle}</p>

                                                            {/* Meta info */}
                                                            <div className="py-4 flex justify-between items-center space-x-4">
                                                                <div className="flex items-center space-x-8">
                                                                    {article.type === 'Member-only story' && (
                                                                        <div className="flex items-center space-x-1 text-yellow-400">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 16 16"
                                                                                fill="currentColor"
                                                                                className="h-4 w-4"
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
                    {/* Likes icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
 />
                    </svg>
                    <p className="text-sm text-gray-500">{article.likes}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Comments icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
 />
                    </svg>
                    <p className="text-sm text-gray-500">{article.comments}</p>
                  </div>
                                                                </div>

                {/* Right icons */}
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
                                            )}
                                    </div>
                                </div>
                            )}
                            {activeTab === "about" && (
                                <div>
                                    <div className='flex gap-4 pb-14 border-b border-black'>
                                        <p className='text-sm text-green-700 py-4'>{author.followers} followers</p>
                                        <p className='text-sm text-green-700 py-3'>.</p>
                                        <p className='text-sm text-green-700 py-4'>{author.following} following</p> 
                                    </div>
                                    <div className='flex justify-between items-end w-full px-4'>
                                    <div> 
                                        <p className='font-semibold text-xl pt-6'>Get an email whenever {author.name} publishes.</p>
                                        <p className='text-sm pt-4 text-gray-800'>Subscribe to get notified whenever I post new content like this</p>
                                        <p className='text-xs text-gray-500 pt-4'>Emails will be sent to {maskEmail(email)}. <span className='underline'>Not you?</span></p>
                                    </div>
                                    <button className="flex items-center border border-gray-800 px-4 py-1 rounded-full h-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                    </svg>
                                    Subscribe
                                    </button>

                                    </div>



                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/**Second column */}
                <div className='flex flex-col pt-12 p-6 w-96' style={{ minHeight: 'calc(100vh - 73px)' }}>
                    {/**Image */}
                    <img src={author.profileImage} alt="Author" className='rounded-full h-24 w-24' />
                    {/**name followers bio follow button */}
                    <p className='font-semibold py-4'>{author.name}</p>
                    <p className='text-gray-500'>{author.followers} followers</p>
                    <p className='text-gray-500 text-sm py-4'>{author.bio}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm w-fit"> Follow </button>

                    {/**Footer Links */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-auto">
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
export default AuthorDetail;
