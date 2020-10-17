import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logoLoginWrapper">
				<NavLink to="/" className="logo">
					Volgograd realty
				</NavLink>
				<Button className="login" type="default" ghost>
					Вход
				</Button>
			</div>
			<Button className="headerBtn" type="primary">
				Поиск
			</Button>
		</div>
	);
};

export default Header;
