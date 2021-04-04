import React, { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
	const [viewport, setViewport] = useState({
		latitude: 48.707103,
		longitude: 44.516939,
		zoom: 13,
		bearing: -40,
		pitch: 0,
	});
	return (
		<MapGL
			{...viewport}
			width="60%"
			height="100%"
			mapStyle="mapbox://styles/follex/ckm6poqh3cjbd17o5gtpfc6u3"
			onViewportChange={setViewport}
			mapboxApiAccessToken="pk.eyJ1IjoiZm9sbGV4IiwiYSI6ImNrZjN0MXBqYTA2YzAyem5vYWh0OXJ4eWcifQ.T10EKgjFamd6JnCRJr4_Ow"
		/>
	);
};

export default Map;
