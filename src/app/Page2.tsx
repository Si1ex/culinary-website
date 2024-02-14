import React from 'react';

function Page2() {
  return (
    <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md">
        {/* Background image */}
        <div className="absolute inset-0 bg-white opacity-50"></div>
      </div>
      <div className="flex flex-col justify-start h-screen">
          {/* Content */}
          
          <div className="flex items-start top-0 w-screen z-10">
            {/* SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#a3e635", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#22c55e", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path 
                fill="url(#grad2)"
                fillOpacity="1" 
                d="M0,128L80,117.3C160,107,320,85,480,112C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
        </div>
    </div>
  );
}

export default Page2;
