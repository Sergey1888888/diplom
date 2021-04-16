import React from "react";
import Preloader from "../Common/Preloader/Preloader";

const ProfileInfo = ({ profile }) => {
	return (
		<div className="data">
			{profile ? (
				<div className="data-item fw300 fs24">
					<span className="fw500 fs24">ФИО: </span>
					{"".concat(
						profile.surname,
						" ",
						profile.name,
						" ",
						profile.patronymic
					)}
				</div>
			) : (
				<Preloader />
			)}
			{profile ? (
				<div className="data-item fw300 fs24">
					<span className="fw500 fs24">Номер телефона: </span>
					{profile.phoneNumber}
				</div>
			) : null}
			{profile ? (
				<div className="data-item fw300 fs24">
					<span className="fw500 fs24">Telegram: </span>
					{profile?.telegram ? profile.telegram : "не указан"}
				</div>
			) : null}
			{profile ? (
				<div className="data-item fw300 fs24">
					<span className="fw500 fs24">VK: </span>
					{profile?.vk ? profile.vk : "не указан"}
				</div>
			) : null}
			{profile ? (
				<div className="data-item fw300 fs24">
					<span className="fw500 fs24">WhatsApp: </span>
					{profile?.whatsup ? profile.whatsup : "не указан"}
				</div>
			) : null}
		</div>
	);
};

export default ProfileInfo;
