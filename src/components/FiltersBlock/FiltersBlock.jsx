import React from "react";
import { Button } from "antd";

const FiltersBlock = () => {
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
			<Button type="text" style={{ width: "50%", height: "100%", textAlign: "center" }}>Фильтры</Button>
			<Button type="text" style={{ width: "50%", height: "100%", textAlign: "center" }}>Сортировка</Button>
		</div>
	);
};

export default FiltersBlock;
