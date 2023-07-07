import React from 'react';

function Map() {
  return (
    <div className="min-h-full items-center columns-1 justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <br />

      <div className="relative p-40 max-w-full">
        <iframe
          className="relative m-auto w-600 h-300"
          style={{ widt3: '75%' }}
          title="Cedat"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=8b596e823b454226aa846a2d5e57fccf&extent=12.9481,43.1137,12.9705,43.122&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
        ></iframe>
        <small className="absolute z-40 bottom-0 mb-[15px]"></small>
      </div>
    </div>
  );
}

export default Map;