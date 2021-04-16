import React, { createContext, useEffect, useState } from "react";
import { Button, Card, Popconfirm, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import UploadAvatar from "../UploadAvatar/UploadAvatar";
import Meta from "antd/lib/card/Meta";
import { deleteRealtyById, getRealtiesByOwnerId } from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";
import { Link } from "react-router-dom";
import { timeConverter } from "../../helpers/convertDate";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import EditProfile from "../EditProfile/EditProfile";
import {
	DeleteOutlined,
	EditOutlined,
	LinkOutlined,
	QuestionCircleOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import EditRealty from "../EditRealty/EditRealty";

export const ProfileContext = createContext();

const Profile = () => {
	const profile = useSelector((state) => state.users.profile);
	const userId = useSelector((state) => state.auth.userId);
	const ownerRealties = useSelector((state) => state.realty.ownerRealties);
	const isDeletingRealty = useSelector(
		(state) => state.realty.isDeletingRealty
	);
	const isOwnerRealtiesLoading = useSelector(
		(state) => state.realty.isOwnerRealtiesLoading
	);
	const isLoading = useSelector((state) => state.users.isLoading);
	const [editMode, setEditMode] = useState(false);
	const [showEditRealty, setShowEditRealty] = useState(false);
	const [realty, setRealty] = useState(null);
	const dispatch = useDispatch();
	const [fileList, setFileList] = useState([]);

	useEffect(() => {
		if (ownerRealties.length === 0) dispatch(getRealtiesByOwnerId(userId));
	}, []);

	return (
		<>
			{showEditRealty && (
				<Modal
					title="Редактирование объявления"
					visible={showEditRealty}
					onCancel={() => setShowEditRealty(false)}
					className="fw300"
					footer={null}
				>
					<ProfileContext.Provider value={{ fileList, setFileList }}>
						<EditRealty realty={realty} setShowEditRealty={setShowEditRealty} />
					</ProfileContext.Provider>
				</Modal>
			)}
			<div className="mainTitle pp">
				<div className="profilePage fw500 big noselect">Личные данные</div>
			</div>
			<div className="dataContainer">
				<div className="dataFlex">
					<div className="dataAvatarWrapper">
						<UploadAvatar />
						{!editMode ? (
							<ProfileInfo profile={profile} />
						) : (
							<EditProfile profile={profile} setEditMode={setEditMode} />
						)}
					</div>
					{isLoading ? (
						<Preloader />
					) : (
						<SettingOutlined
							style={{ fontSize: "24px", height: "100%" }}
							onClick={() => setEditMode(!editMode)}
						/>
					)}
				</div>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "20px",
				}}
			>
				{!isOwnerRealtiesLoading ? (
					ownerRealties.length ? (
						ownerRealties.map((realty) => {
							let normType = "";
							let normDistrict = "";
							if (realty.type) {
								normType = realty.type[0].toLowerCase() + realty.type.slice(1);
							}
							if (realty.district) {
								normDistrict =
									realty.district.slice(0, realty.district.length - 2) + "ом";
							}
							return (
								<Card
									key={realty._id}
									hoverable
									style={{ width: 240 }}
									cover={
										<img
											style={{ height: "150px" }}
											alt="realty"
											src={realty.photos[0]}
										/>
									}
									actions={[
										<Tooltip
											title="Перейти на страницу объявления"
											mouseEnterDelay={1}
										>
											<Link to={`/realty/${realty._id}`}>
												<LinkOutlined key="link" />
											</Link>
										</Tooltip>,
										<Tooltip
											title="Редактировать объявление"
											mouseEnterDelay={1}
										>
											<EditOutlined
												key="edit"
												onClick={() => {
													setShowEditRealty(true);
													setRealty(realty);
													const photos = realty.photos.map((photo) => ({
														uid: photo,
														name: photo,
														status: "done",
														url: photo,
													}));
													setFileList(photos);
												}}
											/>
										</Tooltip>,
										<Tooltip title="Удалить объявление" mouseEnterDelay={1}>
											<Popconfirm
												title="Вы уверены что хотите удалить это объявление?"
												onConfirm={() =>
													dispatch(deleteRealtyById(realty._id, userId))
												}
												okText="Удалить"
												cancelText="Отмена"
												icon={
													<QuestionCircleOutlined style={{ color: "red" }} />
												}
												okButtonProps={{
													danger: true,
													loading: isDeletingRealty,
												}}
											>
												<DeleteOutlined key="delete" />
											</Popconfirm>
										</Tooltip>,
									]}
								>
									<Meta
										title={`${realty.rooms} комнатная ${normType} в ${normDistrict} районе`}
										description={`Добавлено: ${timeConverter(
											realty.created_at
										)}`}
									/>
								</Card>
							);
						})
					) : (
						<h1 style={{ display: "grid", placeItems: "center" }}>
							Вы не выставляли объявлений
						</h1>
					)
				) : (
					<Preloader />
				)}
			</div>
		</>
	);
};

export default Profile;
