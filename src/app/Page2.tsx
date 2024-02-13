import React from 'react';

function Page2() {
  return (
    <div className="relative bg-pack-train bg-no-repeat bg-fixed bg-cover h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md">
        {/* Background image */}
        <div className="absolute inset-0 bg-white opacity-50"></div> {/* Optional overlay for better readability */}
      </div>
      <div className="flex flex-col justify-start h-screen">
          {/* Content */}
          
          <div className="flex items-start top-0 w-screen h-80 md:h- max-[768px]:h-4/5 z-10">
            {/* SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00000" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,112C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
          </div>
        </div>
    </div>
  );
}

export default Page2;
