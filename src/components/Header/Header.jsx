import React, { createContext, useEffect, useState } from "react";
import { Button, Modal, PageHeader, Popconfirm } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import cn from "classnames";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteRealtyById, Logout } from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";
import EditRealty from "../EditRealty/EditRealty";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { getProfile } from "../../redux/actions";

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
						<Link to="/chat" className="authName">
							<Button className="logout" type="default">
								Чат
							</Button>
						</Link>
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

export const SearchPageHeaderContext = createContext();
const SearchPageHeader = ({ onLogoutClick, openModal, profile }) => {
	const [showEditRealty, setShowEditRealty] = useState(false);
	const [fileList, setFileList] = useState([]);
	return (
		<>
			{showEditRealty && (
				<Modal
					title="Создание объявления"
					visible={showEditRealty}
					onCancel={() => setShowEditRealty(false)}
					className="fw300"
					footer={null}
					style={{ minWidth: "40%" }}
				>
					<SearchPageHeaderContext.Provider value={{ fileList, setFileList }}>
						<EditRealty setShowEditRealty={setShowEditRealty} toCreate={true} />
					</SearchPageHeaderContext.Provider>
				</Modal>
			)}
			<div className="logoLoginWrapperSearch">
				<Link to="/" className="logoSearch">
					<Logo />
				</Link>
			</div>
			<div className={cn("salesLogoutWrapper", { logged: !profile })}>
				{!profile ? (
					<Button onClick={openModal} className="login" type="default" ghost>
						Вход
					</Button>
				) : (
					<>
						<Button
							className="mySales"
							type="link"
							onClick={() => setShowEditRealty(true)}
						>
							Создать объявление
						</Button>
						<Link to="/chat" className="authName">
							<Button className="logout" type="default">
								Чат
							</Button>
						</Link>
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
				)}
			</div>
		</>
	);
};

export const RealtyPageHeaderContext = createContext();
const RealtyPageHeader = () => {
	const selectedRealty = useSelector((state) => state.realty.selectedRealty);
	const isNotFound = useSelector((state) => state.realty.isNotFound);
	const isAdmin = useSelector((state) => state.users.profile?.isAdmin);
	const profile = useSelector((state) => state.users.profile);
	const userId = useSelector((state) => state.auth.userId);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const [showEditRealty, setShowEditRealty] = useState(false);
	const [fileList, setFileList] = useState([]);
	const [showModalSocial, setShowModalSocial] = useState(false);
	const isDeletingRealty = useSelector(
		(state) => state.realty.isDeletingRealty
	);
	const dispatch = useDispatch();
	const history = useHistory();
	let normType = "";
	let normDistrict = "";
	if (selectedRealty.type) {
		normType =
			selectedRealty.type[0].toLowerCase() + selectedRealty.type.slice(1);
	}
	if (selectedRealty.district) {
		normDistrict =
			selectedRealty.district.slice(0, selectedRealty.district.length - 2) +
			"ом";
	}
	const showModalSocialWindow = () => {
		setShowModalSocial(true);
	};
	useEffect(() => {
		if (selectedRealty.ownerId) dispatch(getProfile(selectedRealty.ownerId));
	}, [selectedRealty.ownerId]);
	return (
		<>
			{showModalSocial && (
				<Modal
					title="Социальные сети"
					visible={showModalSocial}
					onCancel={() => setShowModalSocial(false)}
					className="fw300"
					footer={null}
					style={{ minWidth: "20%" }}
					centered={true}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<div>{`VK: ${
							profile?.vk ? profile.vk : "владелец не указал"
						}`}</div>
						<div>{`Telegram: ${
							profile?.telegram ? profile.telegram : "владелец не указал"
						}`}</div>
						<div>{`WhatsApp: ${
							profile?.whatsapp ? profile.whatsapp : "владелец не указал"
						}`}</div>
					</div>
				</Modal>
			)}
			{showEditRealty && (
				<Modal
					title="Редактирование объявления"
					visible={showEditRealty}
					onCancel={() => setShowEditRealty(false)}
					className="fw300"
					footer={null}
					style={{ minWidth: "40%" }}
				>
					<RealtyPageHeaderContext.Provider value={{ fileList, setFileList }}>
						<EditRealty
							realty={selectedRealty}
							setShowEditRealty={setShowEditRealty}
							isAdmin={true}
						/>
					</RealtyPageHeaderContext.Provider>
				</Modal>
			)}
			<PageHeader
				ghost={false}
				onBack={() => {
					if (window.history.length === 1) history.push("/search");
					else window.history.back();
				}}
				title={
					selectedRealty.type ? (
						<div className="fw500 fs24">
							{selectedRealty.rooms
								? `${selectedRealty.rooms} комнатная ${normType} в ${normDistrict} районе`
								: `${selectedRealty.type} в ${normDistrict} районе`}
						</div>
					) : isNotFound ? null : (
						<Preloader />
					)
				}
				extra={
					isAdmin
						? [
								<Popconfirm
									className="fw300"
									title="Вы уверены что хотите удалить это объявление?"
									onConfirm={() =>
										dispatch(deleteRealtyById(selectedRealty._id))
									}
									okText="Удалить"
									cancelText="Отмена"
									icon={<QuestionCircleOutlined style={{ color: "red" }} />}
									okButtonProps={{
										danger: true,
										loading: isDeletingRealty,
									}}
								>
									<Button key="1" type="text" ghost danger>
										Удалить
									</Button>
								</Popconfirm>,
								<Button
									className="fw300 fs14"
									key="2"
									type="default"
									onClick={() => {
										const photos = selectedRealty.photos.map((photo) => ({
											uid: photo,
											name: photo,
											status: "done",
											url: photo,
											type: "image/jpeg",
										}));
										setFileList(photos);
										setShowEditRealty(true);
									}}
								>
									Редактировать
								</Button>,
								isAuth ? (
									<Link
										to={{
											pathname: "/chat",
											state: {
												isNotMe: selectedRealty.ownerId !== userId,
												authObject: {
													"Project-ID": "a3a43f92-82fe-42e9-8fd2-e860fa532324",
													"User-Name": userId,
													"User-Secret": localStorage.getItem("__password"),
												},
												username: selectedRealty.ownerId,
											},
										}}
									>
										<Button key="3" type="primary" className="fw300 fs14">
											Связаться
										</Button>
									</Link>
								) : (
									<Button
										key="3"
										type="primary"
										className="fw300 fs14"
										onClick={showModalSocialWindow}
									>
										Связаться
									</Button>
								),
						  ]
						: [
								isAuth ? (
									<Link
										to={{
											pathname: "/chat",
											state: {
												isNotMe: selectedRealty.ownerId !== userId,
												authObject: {
													"Project-ID": "a3a43f92-82fe-42e9-8fd2-e860fa532324",
													"User-Name": userId,
													"User-Secret": localStorage.getItem("__password"),
												},
												username: selectedRealty.ownerId,
											},
										}}
									>
										<Button key="3" type="primary" className="fw300 fs14">
											Связаться
										</Button>
									</Link>
								) : (
									<Button
										key="3"
										type="primary"
										className="fw300 fs14"
										onClick={showModalSocialWindow}
									>
										Связаться
									</Button>
								),
						  ]
				}
			/>
		</>
	);
};

const Header = ({ openModal, profile }) => {
	const isSearchPage = useLocation().pathname === "/search";
	const isRealtyPage = useLocation().pathname.startsWith("/realty");
	const dispatch = useDispatch();
	const onLogoutClick = () => {
		dispatch(Logout());
	};
	return (
		<div className={cn("header", { search: isSearchPage || isRealtyPage })}>
			{isSearchPage ? (
				<>
					<SearchPageHeader
						onLogoutClick={onLogoutClick}
						openModal={openModal}
						profile={profile}
					/>
					<div className="line"></div>
				</>
			) : isRealtyPage ? (
				<>
					<RealtyPageHeader />
					<div className="line"></div>
				</>
			) : (
				<>
					<HomePageHeader
						onLogoutClick={onLogoutClick}
						openModal={openModal}
						profile={profile}
					/>
					<div className="line"></div>
				</>
			)}
		</div>
	);
};

export default Header;
