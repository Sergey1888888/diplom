import React from "react";
import "./Login.css";
import Registration from "./Registration";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { Login as LoginA } from "../../../redux/actions";

const LoginForm = ({ isReg, closeModal }) => {
	const dispatch = useDispatch();
	const onLoginButtonClicked = (email, password) => {
		dispatch(LoginA(email, password));
	};
	return (
		<>
			{isReg ? (
				<Registration />
			) : (
				<Login
					closeModal={closeModal}
					onLoginButtonClicked={onLoginButtonClicked}
				/>
			)}
		</>
	);
};

export default LoginForm;
