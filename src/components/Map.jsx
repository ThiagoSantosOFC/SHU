import React from 'react';

function Map() {
  return (
    <div className="relative pb-[80%] max-w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="300"
        height="200"
  
        title="Cedat"
        src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=12.9481,43.1137,12.9705,43.122&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      ></iframe>
      <small className="absolute z-40 bottom-0 mb-[-15px]"></small>
    </div>
  );
}

export default Map;