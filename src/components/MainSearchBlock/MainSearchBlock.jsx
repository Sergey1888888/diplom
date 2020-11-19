import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./MainSearchBlock.css";

const MainSearchBlock = () => {
	return (
		<>
			<div className="searchBlock">
				<div className="searchBlock_header">
					<div className="searchBlock_header__textWrap">
						<div className="searchBlock_header__textMain fw500 fs28 ls noselect">
							Недвижимость Волгограда
						</div>
						<div className="searchBlock_header__textSmall fw500 ls noselect">
							Найдите свою квартиру или дом прямо сейчас
						</div>
					</div>
					<Link to="/search">
						<Button className="searchBlockBtn fw300 fs15 ls" type="primary">
							Поиск
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default MainSearchBlock;
