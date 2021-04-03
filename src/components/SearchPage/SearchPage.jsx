import React from "react";
import "./SearchPage.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "../Map/Map";
import MarkerImage from "../../images/2.svg";

const SearchPage = () => {
	return (
		<div className="searchPage">
			<Map />
		</div>
	);
};

export default SearchPage;
