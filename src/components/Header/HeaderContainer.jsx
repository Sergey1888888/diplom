import React, { useState } from "react";
import Header from "./Header";
import QueueAnim from "rc-queue-anim";
import LoginForm from "../Modals/Login/LoginForm";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
	const [showLogin, setShowLogin] = useState(false);
	const profile = useSelector((state) => state.app.profile);
	const onLoginFormClicked = () => {
		setShowLogin(true);
	};
	const onFormBackgroundClick = (e) => {
		if (!e.target.closest(".loginForm")) {
			setShowLogin(false);
		}
	};
	const closeModal = () => setShowLogin(false);
	return (
		<>
			<QueueAnim type="alpha">
				{showLogin && (
					<LoginForm
						key="0"
						onFormBackgroundClick={onFormBackgroundClick}
						closeModal={closeModal}
					/>
				)}
			</QueueAnim>
			<Header onLoginFormClicked={onLoginFormClicked} profile={profile} />
			<div className="line"></div>
		</>
	);
};

export default HeaderContainer;
