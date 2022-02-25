import { getCenter } from "geolib";
import React, { useState } from "react";
import { Map as MapGl, Marker } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //   transform search results object into
  //   {lat:23123123, long 12132}
  // object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <MapGl
      mapStyle="mapbox://styles/gerv-/cl01l86yq000c15lh6e5bhtpl"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(result)}
            >
              📌
            </p>
          </Marker>
        </div>
      ))}
    </MapGl>
  );
}

export default Map;
