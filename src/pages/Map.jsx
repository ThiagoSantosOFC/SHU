import React from 'react';

const Map = React.memo(() => {
  return (
    <div className="relative w-full">
      <style>
        {`.embed-container {position: relative; padding-bottom: 90%; max-width: 100vw; max-height: 20vh; display: flex; justify-content: center; align-items: center; margin: 0 auto;} 
        .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} 
        small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}`}
      </style>
      <br />
      <div className="flex pb-40 embed-container">
        <small>
          <a
            href="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=7.5002,40.383,18.948,44.6949&zoom=true&scale=true&disable_scroll=false&theme=light"
            style={{ color: '#0000FF', textAlign: 'left' }}
            target="_blank"
            rel="noreferrer"
          >
            View larger map
          </a>
        </small>
        <br />
        <iframe
          title="Cedat"
          src="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=36b3b9d99cc44653b1d96d9d41bfbea0"
          width="400"
          height="600"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer"
        ></iframe>
      </div>
    </div>
  );
});

export default Map;