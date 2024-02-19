import React from 'react';

function CookingVideo() {
    return (
      <div className='md:mr-32 p-10 w-full h-full'>
        <iframe
          className='w-full h-full flex inset-0 aspect-video'
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/D_2DBLAt57c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

export default CookingVideo;