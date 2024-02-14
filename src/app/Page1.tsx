import React, { Component } from "react";

class Page1 extends Component {
  render() {
    return (
      <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md">
          <div className="absolute inset-0 bg-white opacity-50"></div>
        </div>
        <div className="flex flex-col justify-end h-screen">
          
          <div className="flex items-end h-80 md:h-[36rem] z-10">
            {/* SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#a3e635", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#22c55e", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad1)"
                fillOpacity="1"
                d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,192C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
