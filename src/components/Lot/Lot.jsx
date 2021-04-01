import React from "react";
import defaultImg from "../../images/defaultAvatar.png";
import "./Lot.css"

const Lot = () => {
	return (
		<div className="lotBox">
			<img className="lotImg" src={defaultImg} alt="Фотография" />
			<div className="lotWrap">
				<div className="lot-item fw300 lh28">15 000 000 рублей</div>
				<div className="lot-item fw300 lh28">Улица Ленина, дом 25</div>
			</div>
		</div>
	);
};

export default Lot;
