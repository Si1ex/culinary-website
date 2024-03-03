import React, { useState, useEffect } from 'react';

function Page3() {
  return (
    <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="absolute bottom-0 w-full hidden md:block">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#a3e635", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#22c55e", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          fillOpacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3">
          <div className="m-4">
            <h1 className="mb-1 md:pb-10 text-3xl md:text-5xl font-bold text-center text-white">Artikkelit</h1>
            <h4 className="text-sm md:text-xl text-white font-medium text-center">
              Täällä voit lukea artikkeleita ruokamaailman kiinnostavista ilmiöistä ja trendeistä! Liity herkulliseen yhteisöömme ja inspiroidu ruoan monimuotoisuudesta.
            </h4>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 m-2 md:m-6 gap-2 md:gap-4 md:shrink-0 place-items-center">
          
          <div>
          <div className="relative max-w-sm w-72 h-24 rounded-lg p-6 shadow-lg md:hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
              <div className="absolute inset-0 bg-hävikki bg-no-repeat bg-cover backdrop-blur-lg blur-sm"></div>
              <div className="relative">
                <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-white">
                  Ruokahävikin vähentäminen
                </h5>
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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
          <div>
          <div className="relative max-w-sm w-72 h-24 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
              <div className="absolute inset-0 bg-trendi bg-no-repeat bg-cover backdrop-blur-lg blur-sm"></div>
              <div className="relative">
                <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-white">
                  Vuoden ruokatrendit
                </h5>
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white-900 ppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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
          <div>
            <div className="relative max-w-sm w-72 h-24 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
              <div className="absolute inset-0 bg-pastaa bg-no-repeat bg-cover backdrop-blur-lg blur-sm"></div>
              <div className="relative">
                <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-black">
                  Ihana italialainen keittiö
                </h5>
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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
          <div>
            <div className="relative max-w-sm w-72 h-24 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
                <div className="absolute inset-0 bg-pasta bg-no-repeat bg-cover backdrop-blur-lg blur-sm"></div>
                <div className="relative">
                  <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-white">
                    Etninen keittiö
                  </h5>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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
    </div>
  );
}

export default Page3;