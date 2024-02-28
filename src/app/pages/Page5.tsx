import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';


function Page5() {
  return (
    <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3">
          <div className="m-4">
          <h2 className="mb-1 md:pb-10 text-xl md:text-4xl font-bold text-center text-white">Tervetuloa foorumille!</h2>
          </div>
        </div>
        <div className="md:w-1/2 md:h-1/2 grid grid-cols-1 m-2 md:m-6 px-5 gap-2 md:shrink-0 place-items-center">
          <div className="w-full h-full md:w-full">
            <div className="relative w-full h-full md:h-96 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-artikkeli bg-no-repeat bg-cover backdrop-blur-lg blur-md"></div>
              <div className="relative text-center">
                <h2 className="block mb-2 font-sans md:text-2xl text-lg antialiased font-semibold leading-snug tracking-normal text-black">
                  Foorumi
                </h2>
                <h5 className="text-sm md:text-xl text-black font-medium text-center">
                  Foorumilla pääset keskustelemaan resepteistä ja ruoanlaitosta muiden samanhenkisten kanssa. Jaa kokemuksiasi, vinkkejäsi ja kysy neuvoa ruoanlaittoon liittyvissä kysymyksissä.
                </h5>
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-6 font-sans text-xs md:text-lg font-bold text-center text-black align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button">
                    Lue lisää
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div> 
          </div>
        </div>
      </div>
        <Footer />
      </div>
  );
}

export default Page5;

