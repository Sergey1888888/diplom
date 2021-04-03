import React, { useRef } from "react";
import "./SearchPage.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "../Map/Map";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import MarkerImage from "../../images/2.svg";

const SearchPage = () => {
	const listRef = useRef();
	return (
		<div className="searchPage">
			<div className="list" ref={listRef}>
				<VirtualizedList scrollElementRef={listRef} />
			</div>
			<Map />
		</div>
	);
};

export default SearchPage;
