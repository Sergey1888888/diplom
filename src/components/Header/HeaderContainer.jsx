import React, { useRef, useState } from "react";
import Header from "./Header";
import LoginForm from "../Modals/Login/LoginForm";
import { Button, Modal } from "antd";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
	const [showModal, setShowModal] = useState(false);
	const [isReg, setIsReg] = useState(false);
	const clearFocusBtnRef = useRef();
	const profile = useSelector((state) => state.auth.profile);
	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => setShowModal(false);
	return (
		<>
			<Modal
				title={isReg ? "Регистрация" : "Вход"}
				visible={showModal}
				onCancel={() => setShowModal(false)}
				className="fw300"
				footer={[
					<Button
						key="1"
						type="default"
						className="fw300"
						ref={clearFocusBtnRef}
						onClick={(e) => {
							clearFocusBtnRef.current.blur();
							setIsReg(!isReg);
						}}
					>
						{isReg ? "Вход" : "Регистрация"}
					</Button>,
					<Button
						form="loginForm"
						key="submit"
						htmlType="submit"
						type="primary"
						className="fw300"
					>
						{isReg ? "Зарегистрироваться" : "Войти"}
					</Button>,
				]}
			>
				<LoginForm isReg={isReg} closeModal={closeModal} />
			</Modal>
			<Header openModal={openModal} profile={profile} />
			<div className="line"></div>
		</>
	);
};

export default HeaderContainer;
