import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EditButton from "../Common/EditButton/EditButton";
import "./Profile.css";
import UploadAvatar from "../UploadAvatar/UploadAvatar";
import Meta from "antd/lib/card/Meta";
import { getRealtiesByOwnerId } from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";
import { Link } from "react-router-dom";
import { timeConverter } from "../../helpers/convertDate";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import EditProfile from "../EditProfile/EditProfile";

const Profile = () => {
	const profile = useSelector((state) => state.users.profile);
	const userId = useSelector((state) => state.auth.userId);
	const ownerRealties = useSelector((state) => state.realty.ownerRealties);
	const isOwnerRealtiesLoading = useSelector(
		(state) => state.realty.isOwnerRealtiesLoading
	);
	const isLoading = useSelector((state) => state.users.isLoading);
	const [editMode, setEditMode] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		if (ownerRealties.length === 0) dispatch(getRealtiesByOwnerId(userId));
	}, []);
	return (
		<>
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
						<EditButton onClick={() => setEditMode(!editMode)} />
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
								<Link to={`/realty/${realty._id}`}>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												style={{ height: "150px" }}
												alt="realty"
												src={realty.photos[0]}
											/>
										}
									>
										<Meta
											title={`${realty.rooms} комнатная ${normType} в ${normDistrict} районе`}
											description={`Добавлено: ${timeConverter(
												realty.created_at
											)}`}
										/>
									</Card>
								</Link>
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
