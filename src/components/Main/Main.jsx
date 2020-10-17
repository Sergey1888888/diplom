import React from "react";
import MainSearchBlock from "../MainSearchBlock/MainSearchBlock";
import "./Main.css";

const Main = () => {
	return (
		<>
			<div className="mainTitle">
				<div className="mainText">Найдите дом, который Вам понравится</div>
				<div className="mainTextSmall">
					Попрощайтесь с бессмысленными поездками к агентам по недвижимости,
					бесконечной бумажной работой и заоблачными депозитами.
				</div>
			</div>
            <MainSearchBlock />
		</>
	);
};

export default Main;
