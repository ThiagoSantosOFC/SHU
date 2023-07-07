import React from 'react';

function Map() {
  return (
    <div className="relative p-40 max-w-full">
      <style>
        {`.embed-container {position: relative; padding: 40px; height: 300px; max-width: 100%;} 
        .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} 
        small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}`}
      </style>
      <div className="embed-container">
        <iframe
          title="Cedat"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=11.6038,42.5492,14.4657,43.6184&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&disable_scroll=false&theme=light"
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