import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logoLoginWrapper">
				<Link to="/" className="logo">
					Volgograd realty
				</Link>
				<Button className="login" type="default" ghost>
					Вход
				</Button>
			</div>
			<Link to="/search">
				<Button className="headerBtn" type="primary">
					Поиск
				</Button>
			</Link>
		</div>
	);
};

export default Header;
