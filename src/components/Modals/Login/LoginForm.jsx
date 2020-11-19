import React, { useState } from "react";
import "./Login.css";
import Registration from "./Registration";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { setProfileWithDelay } from "../../../redux/actions";

const LoginForm = ({ onFormBackgroundClick, closeModal }) => {
	const [isReg, setIsReg] = useState(false);
	const dispatch = useDispatch();
	const onLoginButtonClicked = () => {
		dispatch(
			setProfileWithDelay({
				name: "Сергей",
				surname: "Заборонок",
				patronymic: "Валентинович",
			})
		);
		closeModal();
	};
	return (
		<div onClick={onFormBackgroundClick} className="background">
			<div className={"loginForm" + (isReg ? " registration" : "")}>
				<div className="loginFormRel">
					{isReg ? (
						<Registration key="1" setIsReg={setIsReg} />
					) : (
						<Login
							key="2"
							setIsReg={setIsReg}
							onLoginButtonClicked={onLoginButtonClicked}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
