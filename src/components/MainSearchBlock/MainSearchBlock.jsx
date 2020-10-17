import { Button } from "antd";
import React from "react";
import "./MainSearchBlock.css";

const MainSearchBlock = () => {
	return (
		<>
			<div className="searchBlock">
				<div className="searchBlock_header">
					<div className="searchBlock_header__textWrap">
						<div className="searchBlock_header__textMain">Недвижимость Волгограда</div>
						<div className="searchBlock_header__textSmall">Найдите свою квартиру или дом прямо сейчас</div>
					</div>
					<Button className="searchBlockBtn" type="primary">Поиск</Button>
				</div>
			</div>
		</>
	);
};

export default MainSearchBlock;
