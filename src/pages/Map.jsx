import React from "react";

const Map = React.memo(() => {
  return (
    <div className="relative w-full h-screen flex  justify-center items-center">
      <div className="embed-container w-full h-full pt-12 pb-6">

        <br />
        <iframe
          title="Cedat"
          src="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=36b3b9d99cc44653b1d96d9d41bfbea0"
          width="400"
          height="600"
          frameBorder="0"
          style={{ border: 0, height: "100%", width: "100%" }}
          allowFullScreen
          referrerPolicy="no-referrer"
          className="w-full sm:w-auto  sm:h-auto"
        ></iframe>
      </div>
    </div>
  );
});

export default Map;