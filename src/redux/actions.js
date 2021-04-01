import {
	DELETE_PROFILE,
	INITIALIZED_SUCCESS,
	SET_PROFILE,
} from "./actionTypes";
import { authAPI, setToken } from "./../api/api";
import { message, notification } from "antd";

// auth-reducer
export const setProfile = (payload) => ({ type: SET_PROFILE, payload });
export const deleteProfile = () => ({ type: DELETE_PROFILE });

export const getLogin = () => (dispatch) => {
	return authAPI
		.getLogin()
		.then((data) => {
			dispatch(setProfile(data));
		})
		.catch((error) => {
			if (localStorage.getItem("token") != null) {
				notification.info({
					message: "Время сессии истекло",
					description: "Вы можете зайти в аккаунт, нажав на кнопку Вход",
					placement: "topRight",
					duration: 3,
				});
				localStorage.removeItem("token");
			}
		});
};

export const Login = (email, password) => (dispatch) => {
	authAPI
		.Login(email, password)
		.then((data) => {
			setToken(data.access_token);
			dispatch(getLogin());
		})
		.catch((error) => {
			message.error("Неправильный логин или пароль");
		});
};

export const Logout = () => (dispatch) => {
	setToken(null);
	dispatch(deleteProfile());
};

// app-reducer
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getLogin());
	promise.then(() => {
		dispatch(initializedSuccess());
	});
};
