import React, { useEffect } from "react";
import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EditButton from "../Common/EditButton/EditButton";
import "./Profile.css";
import UploadAvatar from "../UploadAvatar/UploadAvatar";
import Meta from "antd/lib/card/Meta";
import { getRealtiesByOwnerId } from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";
import { Link } from "react-router-dom";
import { timeConverter } from "../../helpers/convertDate";

const Profile = () => {
	const profile = useSelector((state) => state.users.profile);
	const userId = useSelector((state) => state.auth.userId);
	const ownerRealties = useSelector((state) => state.realty.ownerRealties);
	const isOwnerRealtiesLoading = useSelector(
		(state) => state.realty.isOwnerRealtiesLoading
	);
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
						<div className="data">
							{profile && (
								<div className="data-item fw300 fs24">
									{"".concat(
										profile.surname,
										" ",
										profile.name,
										" ",
										profile.patronymic
									)}
								</div>
							)}
							{profile && (
								<div className="data-item fw300 fs24">
									{profile.phoneNumber}
								</div>
							)}
							{profile && profile.telegram && (
								<div className="data-item fw300 fs24">{profile.telegram}</div>
							)}
							{profile && profile.vk && (
								<div className="data-item fw300 fs24">{profile.vk}</div>
							)}
						</div>
					</div>
					<EditButton />
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
											description={`Добавлено: ${timeConverter(1618155840649)}`}
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
