import React from 'react';

function Video() {
    return (
      <div className='md:max-w-xl md:w-full w-46 mb-32 aspect-video'>
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

export default Video;