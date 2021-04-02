import {
	DELETE_IS_AUTH,
	DELETE_PROFILE,
	DELETE_USER_ID,
	INITIALIZED_SUCCESS,
	SET_IS_AUTH,
	SET_PROFILE,
	SET_USER_ID,
} from "./actionTypes";
import { authAPI, setToken, usersAPI } from "./../api/api";
import { message, notification } from "antd";

// users-reducer
export const setProfile = (payload) => ({ type: SET_PROFILE, payload });
export const deleteProfile = () => ({ type: DELETE_PROFILE });

export const getProfile = (id) => (dispatch) => {
	return usersAPI
		.getProfile(id)
		.then((data) => {
			dispatch(setProfile(data));
		})
		.catch((error) => {
			console.log(error);
		});
};

// auth-reducer
export const setIsAuth = () => ({ type: SET_IS_AUTH });
export const deleteIsAuth = () => ({ type: DELETE_IS_AUTH });
export const setUserId = (payload) => ({ type: SET_USER_ID, payload });
export const deleteUserId = () => ({ type: DELETE_USER_ID });

export const getLogin = () => (dispatch) => {
	return authAPI
		.getLogin()
		.then((data) => {
			dispatch(setIsAuth());
			dispatch(setUserId(data.userId));
			dispatch(getProfile(data.userId));
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
	return authAPI
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
	dispatch(deleteIsAuth());
	dispatch(deleteUserId());
};

export const Registration = (profileData) => (dispatch) => {
	return authAPI.Registration(profileData).then((data) => {
		notification.success({
			message: "Успешная регистрация",
			description: "Вы можете зайти в аккаунт, нажав на кнопку Вход",
			placement: "topRight",
			duration: 3,
		});
	});
};

// app-reducer
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getLogin());
	promise.then((data) => {
		dispatch(initializedSuccess());
	});
};
