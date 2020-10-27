import React, { useState } from "react";
import Header from "./Header";
import QueueAnim from "rc-queue-anim";
import LoginForm from "../Modals/Login/LoginForm";

const HeaderContainer = () => {
	const [showLogin, setShowLogin] = useState(false);
	const onLoginClicked = () => {
		setShowLogin(true);
	};
	const onFormBackgroundClick = (e) => {
		if (!e.target.closest(".loginForm")) {
			setShowLogin(false);
		}
	};
	return (
		<>
			<QueueAnim type="alpha">
				{showLogin && (
					<LoginForm key="0" onFormBackgroundClick={onFormBackgroundClick} />
				)}
			</QueueAnim>
			<Header onLoginClicked={onLoginClicked} />
		</>
	);
};

export default HeaderContainer;
