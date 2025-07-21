import logo from "../assets/logo.png"
import user from "../pages/User";
import { Link } from 'react-router-dom';
import write from "../pages/Write";



const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 px-6 py-4">
      <div className="flex justify-between items-center">
        {/**left side */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-6 w-auto mr-3" />
          <div className="relative">
            <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
            />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="px-10 py-2 text-base bg-gray-50 rounded-full focus:outline-none placeholder-gray-600 placeholder:text-sm"
            />
          </div>
        </div>

        {/**right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>



            <Link to="/write">
              <div className="text-gray-800 font-normal text-base">
              Write
            </div>
            </Link>
          </div>
          
          <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
  />
          </svg>


          <Link to="/user">
          
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
