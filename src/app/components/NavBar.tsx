import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from "./SearchBar";
import logo from '../images/logo.png';

export default function NavBar() {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
            // Add event listener to document for clicks
            document.addEventListener('click', handleClickOutsideMenu);
    
            return () => {
                // Remove event listener when component unmounts
                document.removeEventListener('click', handleClickOutsideMenu);
            };
        }, []);

        function handleClickOutsideMenu(event) {
            // Check if target element is inside the menu or the hamburger button
            if (
              menuRef.current &&
              !menuRef.current.contains(event.target) &&
              !event.target.closest('.absolute')
            ) {
              // Hide the menu
              var menu = document.getElementById('menu');
              menu.classList.add('max-[1024px]:hidden');
            }
          }
        
          function toggleMenu() {
            var menu = document.getElementById('menu');
            if (menu.classList.contains('max-[1024px]:hidden')) {
              menu.classList.remove('max-[1024px]:hidden');
            } else {
              setIsOpen(!isOpen);
              menu.classList.add('max-[1024px]:block');
            }
          }

    return (
    <nav className="fixed top-0 z-50 w-full rounded-b-3xl border-gray-200 bg-repeat-space bg-gradient-to-r from-lime-400 to-green-500">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-24 flex-shrink-0 hidden lg:block">
            <Link href="#firstPage" className="flex">
            <Image
                src={logo}
                width={50}
                height={50}
                className=""
                alt="Logo"
            />
            </Link>
        </div>
        <div className="flex order-2 lg:orde-1">
            
        <SearchBar />

        <div //Hamburger button
            className="absolute items-center right-5">
            <button 
                data-collapse-toggle="navbar-search" 
                type="button"
                onClick={toggleMenu}
                id="hamburger-menu"
                className="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-white hover:bg-transparent hover:ring-white focus:ring-white"
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
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div //Hamburger menu
        className={`max-[1024px]:hidden block lg:hidden absolute right-16 z-50 mr-1 top-4 px-1 w-48 h-34 shadow-lg ring-1 bg-repeat-space bg-gradient-to-br border-gray-200 from-lime-400 to-green-500 rounded-2xl ${
            isOpen ? `max-[1024px]:block` : ``
          }`}
        id="menu"
        ref={menuRef}
        >
            <div className="flex flex-col text-white text-lg items-start px-3 py-3 space-y-2 ">
            <a 
                    href="#secondPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Viikon resepti</a>
            <a 
                    href="#thirdPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Artikkelit</a>
            <a 
                    href="#fourthPage" 
                    className="block py-2 px-3 text-white rounded " 
                    aria-current="page">Albumi ja foorumi</a>
            </div>
        </div>
    </div>
        <div //Search bar
            className="items-center justify-between hidden w-full md:flex md:w-auto order-3 lg:order-1" 
            id="navbar-search">
        <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg 
                className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 20 20">
                <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>

        </div>
        <div className="hidden lg:block container text-white">
            <div className="flex items-center justify-center">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-repeat-space bg-transparent">
            <li>
            <a 
                href="#firstPage" 
                className="block py-2 px-3 text-white rounded hover:scale-110 ease-in-out duration-100 md:bg-transparent md:p-0" 
                aria-current="page">Koti</a>
            </li>
            <li>
            <a 
                href="#secondPage" 
                className="block py-2 px-3 text-white rounded hover:scale-110 ease-in-out duration-100 md:bg-transparent md:p-0" 
                aria-current="page">Viikon resepti</a>
            </li>
            <li>
            <a 
                href="#thirdPage" 
                className="block py-2 px-3 text-gray-900 rounded hover:scale-110 ease-in-out duration-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparen">Artikkelit</a>
            </li>
            <li>
            <a 
                href="#fourthPage" 
                className="block py-2 px-3 text-gray-900 rounded hover:scale-110 ease-in-out duration-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Albumi ja foorumi</a>
            </li>
        </ul>
            </div>
        </div>
        </div>
    </div>
    </nav>

    );
}