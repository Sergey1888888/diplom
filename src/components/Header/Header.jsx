import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import "./Header.css";

const HomePageHeader = ({ onLoginClicked }) => {
	return (
		<>
			<div className="logoLoginWrapper">
				<Link to="/" className="logo">
					Volgograd realty
				</Link>
				{true ? (
					<Button
						onClick={onLoginClicked}
						className="login"
						type="default"
						ghost
					>
						Вход
					</Button>
				) : (
					<Link to="/profile" className="authName">
						<div style={{ color: "rgba(0, 0, 0, 0.7)", paddingRight: "0.5em" }}>
							Здравствуйте,
						</div>
						Заборонок Сергей!
					</Link>
				)}
			</div>
			<div className="logoutSearchWrapper">
				{true && (
					<Button className="logout" type="default" danger>
						Выйти
					</Button>
				)}
				<Link to="/search">
					<Button className="headerBtn" type="primary">
						Поиск
					</Button>
				</Link>
			</div>
		</>
	);
};

const SearchPageHeader = ({ onLoginClicked }) => {
	return (
		<>
			<div className="logoLoginWrapperSearch">
				<Link to="/" className="logoSearch">
					Volgograd realty
				</Link>
				{true && (
					<Link to="/profile" className="authName authNameSearch">
						<div style={{ color: "rgba(0, 0, 0, 0.7)", paddingRight: "0.5em" }}>
							Здравствуйте,
						</div>
						Заборонок Сергей!
					</Link>
				)}
			</div>
			<div className="salesLogoutWrapper">
				<Button className="mySales" type="link">
					Мои продажи
				</Button>
				<Button className="logout" type="default" danger>
					Выйти
				</Button>
			</div>
		</>
	);
};
const Header = ({ onLoginClicked }) => {
	const isSearchPage = useLocation().pathname === "/search";
	return (
		<div className={cn("header", { search: isSearchPage })}>
			{isSearchPage ? (
				<SearchPageHeader />
			) : (
				<HomePageHeader onLoginClicked={onLoginClicked} />
			)}
		</div>
	);
};

export default Header;
