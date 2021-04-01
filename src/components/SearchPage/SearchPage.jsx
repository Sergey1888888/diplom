import React from "react";
import "./SearchPage.css";
import ReactMapboxGl, { Layer, Marker, Cluster } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MarkerImage from "../../images/2.svg";

const SearchPage = () => {
	const features = [
		{ geometry: { coordinates: [44.596939, 48.797103] } },
		{ geometry: { coordinates: [44.576939, 48.777103] } },
		{ geometry: { coordinates: [44.556939, 48.757103] } },
		{ geometry: { coordinates: [44.536939, 48.737103] } },
	];
	const clusterMarker = (coordinates) => (
		<Marker coordinates={coordinates}>
			<div style={{ width: "30px", height: "30px", backgroundImage: `url(${MarkerImage})` }} />
		</Marker>
	);
	return (
		<div className="searchPage">
			<Map
				style="mapbox://styles/follex/ckm6poqh3cjbd17o5gtpfc6u3"
				containerStyle={{
					height: "100%",
					width: "100%",
				}}
				pitch={[60]}
				bearing={[-60]}
				center={[44.516939, 48.707103]}
			>
				<Layer
					id="3d-buildings"
					sourceId="composite"
					sourceLayer="building"
					filter={["==", "extrude", "true"]}
					type="fill-extrusion"
					minZoom={14}
					paint={{
						"fill-extrusion-color": "#aaa",
						"fill-extrusion-height": [
							"interpolate",
							["linear"],
							["zoom"],
							15,
							0,
							15.05,
							["get", "height"],
						],
						"fill-extrusion-base": [
							"interpolate",
							["linear"],
							["zoom"],
							15,
							0,
							15.05,
							["get", "min_height"],
						],
						"fill-extrusion-opacity": 0.6,
					}}
				></Layer>
				<Cluster ClusterMarkerFactory={clusterMarker}>
					{features.map((feature, key) => (
						<Marker key={key} coordinates={feature.geometry.coordinates}>
							<div style={{ width: "30px", height: "30px", backgroundImage: `url(${MarkerImage})` }} />
						</Marker>
					))}
				</Cluster>
			</Map>
		</div>
	);
};

export default SearchPage;

const Map = ReactMapboxGl({
	accessToken:
		"pk.eyJ1IjoiZm9sbGV4IiwiYSI6ImNrZjN0MXBqYTA2YzAyem5vYWh0OXJ4eWcifQ.T10EKgjFamd6JnCRJr4_Ow",
	logoPosition: "bottom-right",
});
