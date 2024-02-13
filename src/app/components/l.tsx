<nav className="border-gray-200 bg-repeat-space bg-gradient-to-br from-lime-400 to-green-500">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex">
        <div className="flex items-center right-5">
            <form 
                action="" 
                className="relative mx-auto w-max">
            <input 
                type="search" 
                placeholder="Hae..."
                className="peer text-white cursor-pointer relative right-0 z-10 h-12 w-12 rounded-lg border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 placeholder-white" />

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-white peer-focus:stroke-white" 
                fill="none" 
                viewBox="0 0 20 20" 
                stroke="currentColor" 
                stroke-width="2">
                <path 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </form>
        </div>
        <div className="absolute items-center left-5">
            <button 
                data-collapse-toggle="navbar-search" 
                type="button"
                onClick={toggleMenu}
                id="hamburger-menu"
                className="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-white hover:bg-transparent hover:ring-white focus:ring-white "
                aria-controls="navbar-search" 
                aria-expanded="false">
                <svg 
                    className="w-5 h-5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 17 14">
                    <path 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div //Hamburger menu
        className={`max-[768px]:hidden md:hidden absolute left-16 mr-1 top-4 px-1 w-48 h-34 shadow-lg ring-1 bg-repeat-space bg-gradient-to-br border-gray-200 from-lime-400 to-green-500 rounded-2xl`}
        id="menu"
        ref={menuRef}
        >
            <div className="flex flex-col text-white text-lg items-start px-3 py-3 space-y-2 ">
            <a 
                    href="#firstPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Koti</a>
            <a 
                    href="#secondPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Viikon resepti</a>
            <a 
                    href="#fthirdPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Artikkelit</a>
            <a 
                    href="#fourthPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Albumi ja foorumi</a>
            </div>
        </div>
        </div>
        <div 
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-repeat-space bg-transparent  dark:border-gray-700">
            <li>
                <a 
                    href="#" 
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" 
                    aria-current="page">Koti</a>
            </li>
            <li>
                <a 
                    href="#" 
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Viikon resepti</a>
            </li>
            <li>
                <a 
                    href="#" 
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Artikkelit</a>
            </li>
            <li>
                <a 
                    href="#" 
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Albumi ja foorumi</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>