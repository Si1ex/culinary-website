import React from 'react';
import CookingVideo from './components/Video';

function Page4() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <h1 className="text-4xl font-bold">Page 4</h1>
      <p className="text-lg">This is page 4</p>
      <div className="relative">
        <CookingVideo />
      </div>
    </div>
  );
}

export default Page4;