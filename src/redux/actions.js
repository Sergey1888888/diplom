import {
	DELETE_IS_AUTH,
	DELETE_PROFILE,
	DELETE_SELECTED_REALTY,
	DELETE_USER_ID,
	INITIALIZED_SUCCESS,
	SET_CURRENT_PAGE,
	SET_DATA,
	SET_IS_AUTH,
	SET_PROFILE,
	SET_SELECTED_REALTY,
	SET_TOTAL,
	SET_USER_ID,
} from "./actionTypes";
import { authAPI, realtyAPI, setToken, usersAPI } from "./../api/api";
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

// realty-reducer
export const setCurrentPage = (payload) => ({
	type: SET_CURRENT_PAGE,
	payload,
});
export const setTotal = (payload) => ({ type: SET_TOTAL, payload });
export const setData = (payload) => ({ type: SET_DATA, payload });
export const setSelectedRealty = (payload) => ({
	type: SET_SELECTED_REALTY,
	payload,
});
export const deleteSelectedRealty = () => ({ type: DELETE_SELECTED_REALTY });

export const getRealtyById = (id) => (dispatch) => {
	return realtyAPI
		.getById(id)
		.then((data) => {
			dispatch(setSelectedRealty(data));
		})
		.catch((error) => console.log(error));
};

export const getTotal = () => (dispatch) => {
	return realtyAPI
		.getTotal()
		.then((data) => {
			dispatch(setTotal(data));
		})
		.catch((error) => console.log(error));
};

export const getData = (currentPage, filters = {}, sorts = {}) => (
	dispatch
) => {
	return realtyAPI
		.paginate(currentPage, filters, sorts)
		.then((data) => {
			dispatch(setData(data));
		})
		.catch((error) => console.log(error));
};
