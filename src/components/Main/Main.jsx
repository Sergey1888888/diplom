import React from "react";
import MainSearchBlock from "../MainSearchBlock/MainSearchBlock";
import "./Main.css";

const Main = () => {
	return (
		<>
			<div className="mainTitle">
				<div className="mainText fw500 big noselect">
					Найдите дом, который Вам понравится
				</div>
				<div className="mainTextSmall fw300 fs24 noselect">
					Попрощайтесь с бессмысленными поездками к агентам по недвижимости,
					бесконечной бумажной работой и заоблачными депозитами.
				</div>
			</div>
			<MainSearchBlock />
		</>
	);
};

export default Main;
