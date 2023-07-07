import React from 'react';

function Map() {
  return (
    <div className="embed-container">
      <style>
        {`.embed-container {
          position: relative;
          padding-bottom: 80%;
          height: 0;
          max-width: 100%;
        }
        .embed-container iframe,
        .embed-container object,
        .embed-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        small {
          position: absolute;
          z-index: 40;
          bottom: 0;
          margin-bottom: -15px;
        }`}
      </style>
      <iframe
        width="500"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Cedat"
        src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=12.9481,43.1137,12.9705,43.122&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      ></iframe>
    </div>
  );
}

export default Map;