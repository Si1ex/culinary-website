import React, { Component } from "react";

class Page1 extends Component {
  render() {
    return (
      <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md">
          {/* Background image */}
          <div className="absolute inset-0 bg-white opacity-50"></div> {/* Optional overlay for better readability */}
        </div>
        <div className="flex flex-col justify-end h-screen">
          <div>
            <span>
              <h1>
                Page 2
              </h1>
            </span>
          </div>
          <div className="flex items-end h-80 md:h-[36rem] z-10">
            {/* SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
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
