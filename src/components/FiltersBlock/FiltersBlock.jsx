import React, { useState } from "react";
import { Button } from "antd";
import Animate from "rc-animate";
import Filters from "./Filters";
import Sorts from "./Sorts";

const FiltersBlock = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [showSorts, setShowSorts] = useState(false);
	console.log("Filters: ", showFilters);
	console.log("Sorts: ", showSorts);
	// все фльтры в редакс
	return (
		<div
			style={{
				position: "sticky",
				top: "0px",
				display: "flex",
				width: "100%",
				height: "50px",
				backgroundColor: "white",
				borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
				zIndex: "100",
			}}
		>
			<Button
				type="text"
				style={{ width: "50%", height: "100%", textAlign: "center" }}
				onClick={() => setShowFilters(!showFilters)}
			>
				Фильтры
			</Button>
			<Animate component="" transitionName="fade">
				{showFilters ? <Filters setShowFilters={setShowFilters} /> : null}
			</Animate>
			<Button
				type="text"
				style={{ width: "50%", height: "100%", textAlign: "center" }}
				onClick={() => setShowSorts(!showSorts)}
			>
				Сортировка
			</Button>
			<Animate component="" transitionName="fade">
				{showSorts ? <Sorts setShowSorts={setShowSorts}/> : null}
			</Animate>
		</div>
	);
};

export default FiltersBlock;
