import React from 'react';

function Map() {
  return (
    <div className="relative pb-[0%] max-w-full">
      <style>
        {`.embed-container {position: relative; padding: 30%; height: 0; max-width: 100%;} 
        .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} 
        small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}`}
      </style>
      <div className="embed-container">
        <small>
          <a
            href="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=7.5002,40.383,18.948,44.6949&zoom=true&scale=true&disable_scroll=false&theme=light"
            style={{ color: '#0000FF', textAlign: 'left' }}
            target="_blank"
          >
            View larger map
          </a>
        </small>
        <br />
        <iframe
          title="Cedat"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=7.5002,40.383,18.948,44.6949&zoom=true&previewImage=false&scale=true&disable_scroll=false&theme=light"
          width="300"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;