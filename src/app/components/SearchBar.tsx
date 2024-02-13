import React from 'react';

export default function SearchBar() {

  return (
    <div className='w-full'>
        <form>
        <div className="w-full relative flex bg-transparent items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500  dark:text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="IP"
            id="default-search"
            data-testid="default-search"
            autoComplete="off"
            className="w-full text flex p-3 pl-10 py-2.5 px-4 rounded-3xl shadow-xl outline-none overflow-y-auto scrollbar-thumb-purple-500 text-gray-900 bg-gray-50 focus:border-purple-400 dark:bg-white"
            placeholder="Etsi resepti..."
            required
          />
          <div className="w-1/3 md:w-1/4 absolute inset-y-0 right-0 z-30 flex items-center pl-3">
            <button
              type="submit"
              data-testid="search-button"
              className="text-white w-full hover:scale-105 ease-in-out duration-100 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hae
            </button>
          </div>
        </div>
    </form>
    </div>
  );
}