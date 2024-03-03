import React from 'react';
import Video from '../components/Video';

function Page2() {
  return (
    <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="hidden md:block absolute bottom-0 w-full">
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
      <div className="absolute grid grid-cols-1 md:grid-cols-2 inset-0 md:m-3 px-5 h-screen md:gap-4 md:shrink-0 grid-rows-2
       md:grid-rows-1 items-center justify-center">
          <div className="relative mt-5 lg:max-w-3xl lg:max-h-3xl w-full h-2/5 md:h-2/3 md:mt-20 md:mr-6 hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col justify-center items-center">
    <div className="absolute inset-0 bg-carbonara bg-no-repeat bg-contain bg-center shadow-lg"></div>
</div>

        <div className="flex flex-col justify-center md:h-full place-items-center">
        <div className="m-4">
            <h1 className="p-3 md:text-lg font-bold text-center text-white">Viikon resepti: Pasta Carbonara</h1>
            <h4 className="text-xs md:text-sm text-white font-medium text-center">
              Tämän viikon reseptinä esittelemme herkullisen Pasta Carbonaran! Tämä italialainen klassikko on täydellinen valinta kiireiseen arkeen tai illalliseksi ystävien kanssa. Pasta Carbonara valmistetaan kermaisella pekonikastikkeella, joka on täynnä suussa sulavaa parmesaanijuustoa ja tuoretta mustapippuria. Tämä resepti on helppo valmistaa ja siitä tulee takuuvarmasti suosikki koko perheelle. Tarjoile höyryävä pasta kuumana lautasella ja ripottele päälle runsaasti raastettua parmesaania.
            </h4>
          </div>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Page2;
