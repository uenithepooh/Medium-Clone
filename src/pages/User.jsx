import React from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import user from '../data/user';
import Navbar from "../components/Navbar";
import articles from '../data/articles';


const UserPage = () => {
  const [activeTab, setActiveTab] = useState("home");
     return (
    <div>
        <Navbar />
        <main>
            <div className="grid grid-cols-3 gap-4 px-60">
                {/**First column */}
                <div className="col-span-2 border-r border-gray-100 p-4 max-w-4xl ">
                    <div className="p-6 max-w-2xl mx-auto">
                        <div className='flex justify-between'>
                            <h1 className="text-4xl font-bold">{user[0].name}</h1>
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
                                    <p>no article yet</p>
                                </div>
                            )}
                            {activeTab === "about" && (
                                <div>
                                    <div className='flex gap-4 pb-14 border-b border-black'>
                                        <p className='text-sm text-green-700 py-4'>{user[0].followers} followers</p>
                                        <p className='text-sm text-green-700 py-3'>.</p>
                                        <p className='text-sm text-green-700 py-4'>{user[0].following} following</p> 
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/**Second column */}
                <div className='flex flex-col pt-12 p-6 w-96' style={{ minHeight: 'calc(100vh - 73px)' }}>
                    {/**Image */}
                    <div className="flex items-center justify-center font-normal text-base rounded-full bg-purple-800 text-white text-5xl px-3 py-1 cursor-pointer w-20 h-20">U</div>
                    {/**name followers bio follow button */}
                    <p className='font-semibold py-4'>{user[0].name}</p>
                    <p className='text-gray-500'>{user[0].followers} followers</p>
                    <p className='text-gray-500 text-sm py-4'>{user[0].bio}</p>
                    <button className="text-green-700 py-2 text-sm w-fit"> Edit profile </button>

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
export default UserPage;
