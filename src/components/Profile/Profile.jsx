import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import EditButton from "../Common/EditButton/EditButton";
import "./Profile.css";
import Lot from "../Lot/Lot";
import UploadAvatar from "../UploadAvatar/UploadAvatar";

const Profile = () => {
	const profile = useSelector((state) => state.users.profile);
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
				<div className="avatarChangeBtn">
					<Button type="text fw300 fs24">Изменить</Button>
				</div>
			</div>
			{/* TODO: добавить проверку на выставленные лоты, если есть, то показывать лоты из API через .map() */}
			<Lot />
		</>
	);
};

export default Profile;
