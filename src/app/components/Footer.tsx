import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '../images/logo.png';

function Footeri() {
    return (
      <footer className="absolute h-36 flex-wrap whitespace-nowrap items-center p-4 bottom-0 w-full hidden md:flex max-md:landscape:hidden rounded-t-3xl z-50 bg-gradient-to-r from-lime-400 to-green-500">
            <div className="w-24 flex-shrink-0 hidden md:block mx-10">
              <Link href="/">
                  <Image src={logo} width={75} height={75} className="flex" alt="" />
              </Link>
            </div>
            <div className="flex md:w-1/2 mx-10">
              <div className="whitespace-nowrap">
                <h2 className="mb-2 mt-3 font-semibold text-white uppercase">Ota yhteyttä</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="https://t.me/Si1eX" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0">Telegram</a>
                  </li>
                  <li className="mb-2">
                    <a href="https://github.com/Si1ex" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0">Github</a>
                  </li>
                </ul>
              </div>
              <div className="whitespace-nowrap mx-10">
                <h2 className="mb-2 mt-3 font-semibold text-white uppercase">Tutustu myös</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="https://www.uef.fi/" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0">Itä-Suomen yliopisto</a>
                  </li>
                  <li>
                    <a href="https://www.karelia.fi/" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0">Karelia AMK</a>
                  </li>
                </ul>
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mb-2 mt-3 font-semibold text-white uppercase">Yhteystiedot</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="" className="">Matti Meikäläinen</a>
                  </li>
                  <li>
                    <a href="mailto:info@ruokamaailma.com" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0">info@ruokamaailma.com</a>
                  </li>
                </ul>
              </div>
            </div>
      </footer>
    );
  }
  
  export default Footeri;
  