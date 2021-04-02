import React from "react";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import cn from "classnames";
import "./Header.css";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions";

const HomePageHeader = ({ onLogoutClick, openModal, profile }) => {
	return (
		<>
			<div className="logoLoginWrapper">
				<Link to="/" className="logo">
					<Logo />
				</Link>
			</div>
			<div className={cn("logoutSearchWrapper", { logged: !profile })}>
				{profile ? (
					<>
						<Link to="/profile" className="authName">
							<Button className="logout" type="default">
								Профиль
							</Button>
						</Link>
						<Button
							className="logout"
							type="default"
							danger
							onClick={() => onLogoutClick()}
						>
							Выйти
						</Button>
					</>
				) : (
					<Button onClick={openModal} className="login" type="default" ghost>
						Вход
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

const SearchPageHeader = ({ onLogoutClick, openModal, profile }) => {
	return (
		<>
			<div className="logoLoginWrapperSearch">
				<Link to="/" className="logoSearch">
					<Logo />
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
					<Button onClick={openModal} className="login" type="default" ghost>
						Вход
					</Button>
				) : (
					<>
						<Button className="mySales" type="link">
							Мои продажи
						</Button>
						<Button
							className="logout"
							type="default"
							danger
							onClick={() => onLogoutClick()}
						>
							Выйти
						</Button>
					</>
				)}
			</div>
		</>
	);
};
const Header = ({ openModal, profile }) => {
	const isSearchPage = useLocation().pathname === "/search";
	const dispatch = useDispatch();
	const onLogoutClick = () => {
		dispatch(Logout());
	};
	return (
		<div className={cn("header", { search: isSearchPage })}>
			{isSearchPage ? (
				<SearchPageHeader
					onLogoutClick={onLogoutClick}
					openModal={openModal}
					profile={profile}
				/>
			) : (
				<HomePageHeader
					onLogoutClick={onLogoutClick}
					openModal={openModal}
					profile={profile}
				/>
			)}
		</div>
	);
};

export default Header;
