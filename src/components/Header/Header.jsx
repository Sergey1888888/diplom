import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import "./Header.css";

const HomePageHeader = ({ onLoginFormClicked, profile }) => {
	return (
		<>
			<div className="logoLoginWrapper">
				<Link to="/" className="logo">
					Volgograd realty
				</Link>
				{!profile ? (
					<Button
						onClick={onLoginFormClicked}
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
						{profile.surname} {profile.name}!
					</Link>
				)}
			</div>
			<div className={cn("logoutSearchWrapper", { logged: !profile })}>
				{profile && (
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

const SearchPageHeader = ({ onLoginFormClicked, profile }) => {
	return (
		<>
			<div className="logoLoginWrapperSearch">
				<Link to="/" className="logoSearch">
					Volgograd realty
				</Link>
				{profile && (
					<Link to="/profile" className="authName authNameSearch">
						<div style={{ color: "rgba(0, 0, 0, 0.7)", paddingRight: "0.5em" }}>
							Здравствуйте,
						</div>
						{profile.surname} {profile.name}!
					</Link>
				)}
			</div>
			<div className={cn("salesLogoutWrapper", { logged: !profile })}>
				{!profile ? (
					<Button
						onClick={onLoginFormClicked}
						className="login"
						type="default"
						ghost
					>
						Вход
					</Button>
				) : (
					<>
						<Button className="mySales" type="link">
							Мои продажи
						</Button>
						<Button className="logout" type="default" danger>
							Выйти
						</Button>
					</>
				)}
			</div>
			{/* TODO добавить кнопку входа */}
		</>
	);
};
const Header = ({ onLoginFormClicked, profile }) => {
	const isSearchPage = useLocation().pathname === "/search";
	return (
		<div className={cn("header", { search: isSearchPage })}>
			{isSearchPage ? (
				<SearchPageHeader
					onLoginFormClicked={onLoginFormClicked}
					profile={profile}
				/>
			) : (
				<HomePageHeader
					onLoginFormClicked={onLoginFormClicked}
					profile={profile}
				/>
			)}
		</div>
	);
};

export default Header;
