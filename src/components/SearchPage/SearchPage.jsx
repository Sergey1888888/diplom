import React, { useRef } from "react";
import "./SearchPage.css";
import Map from "../Map/Map";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import MarkerImage from "../../images/2.svg";
import FiltersBlock from "../FiltersBlock/FiltersBlock";

const SearchPage = () => {
	const listRef = useRef();
	return (
		<div className="searchPage">
			<div className="list" ref={listRef}>
				<FiltersBlock />
				<VirtualizedList scrollElementRef={listRef} />
			</div>
			<Map />
		</div>
	);
};

export default SearchPage;
