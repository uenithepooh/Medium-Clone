import logo from "../assets/logo.png"

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
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
              <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
            </svg>


            <div className="text-gray-800 font-normal text-base">
              Write
            </div>
          </div>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="font-normal text-base inline-block rounded-full bg-purple-800 text-white px-3 py-1">U</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
