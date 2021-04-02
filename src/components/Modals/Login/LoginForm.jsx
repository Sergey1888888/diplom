import React, { useCallback } from "react";
import "./Login.css";
import Login from "./Login";
import Registration from "./Registration";
import { useDispatch } from "react-redux";
import {
	Login as LoginA,
	Registration as RegistrationA,
} from "../../../redux/actions";

const LoginForm = ({ isReg, closeModal }) => {
	const dispatch = useDispatch();
	const onLoginButtonClicked = useCallback(
		(email, password) => dispatch(LoginA(email, password)),
		[dispatch]
	);
	const onRegistrationButtonClicked = useCallback(
		(profileData) => dispatch(RegistrationA(profileData)),
		[dispatch]
	);
	return (
		<>
			{isReg ? (
				<Registration
					onRegistrationButtonClicked={onRegistrationButtonClicked}
					closeModal={closeModal}
				/>
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
