import React from 'react';

function Map() {
  return (
    <div className="relative pb-[80%] max-w-full">
      <iframe
        width="500"
        height="400"
        title="Cedat"
        src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=12.9481,43.1137,12.9705,43.122&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
        className="bg-transparent"
      ></iframe>
      <small className="absolute z-40 bottom-0 mb-[-15px]"></small>
    </div>
  );
}

export default Map;