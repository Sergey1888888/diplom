import {
	DELETE_IS_AUTH,
	DELETE_IS_NOT_FOUND,
	DELETE_PROFILE,
	DELETE_SELECTED_REALTY,
	DELETE_USER_ID,
	INITIALIZED_SUCCESS,
	SET_CURRENT_PAGE,
	SET_DATA,
	SET_IS_AUTH,
	SET_IS_NOT_FOUND,
	SET_PROFILE,
	SET_SELECTED_REALTY,
	SET_TOTAL,
	SET_USER_ID,
	SET_REALTY_IS_LOADING,
	UPDATE_FILTERS,
	UPDATE_SORTS,
	SET_AUTH_IS_LOADING,
	SET_HAS_NEXT_PAGE,
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
export const setAuthIsLoading = (payload) => ({
	type: SET_AUTH_IS_LOADING,
	payload,
});

export const getLogin = () => (dispatch) => {
	dispatch(setAuthIsLoading(true));
	return authAPI
		.getLogin()
		.then((data) => {
			dispatch(setAuthIsLoading(false));
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
			dispatch(setAuthIsLoading(false));
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
	dispatch(setAuthIsLoading(true));
	return authAPI
		.Registration(profileData)
		.then((data) => {
			dispatch(setAuthIsLoading(false));
			notification.success({
				message: "Успешная регистрация",
				description: "Вы можете зайти в аккаунт, нажав на кнопку Вход",
				placement: "topRight",
				duration: 3,
			});
		})
		.catch((error) => {
			if (error.response.status === 409) {
				notification.error({
					message: "Не удалось зарегистрироваться",
					description: "Пользователь с такими данными уже зарегистрирован",
					placement: "topRight",
					duration: 3,
				});
			} else {
				notification.error({
					message: "Не удалось зарегистрироваться",
					description: "Неизвестная ошибка",
					placement: "topRight",
					duration: 3,
				});
			}
			dispatch(setAuthIsLoading(false));
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
export const setIsNotFound = () => ({ type: SET_IS_NOT_FOUND });
export const deleteIsNotFound = () => ({ type: DELETE_IS_NOT_FOUND });
export const setIsLoading = (payload) => ({
	type: SET_REALTY_IS_LOADING,
	payload,
});
export const updateFilters = (payload) => ({ type: UPDATE_FILTERS, payload });
export const updateSorts = (payload) => ({ type: UPDATE_SORTS, payload });
export const setHasNextPage = (payload) => ({
	type: SET_HAS_NEXT_PAGE,
	payload,
});

export const getRealtyById = (id) => (dispatch) => {
	dispatch(setIsLoading(true));
	return realtyAPI
		.getById(id)
		.then((data) => {
			dispatch(setSelectedRealty(data));
			dispatch(setIsLoading(false));
		})
		.catch(() => {
			dispatch(setIsNotFound());
			dispatch(setIsLoading(false));
		});
};

export const getTotal = (filters = {}) => (dispatch) => {
	return realtyAPI
		.getTotal(filters)
		.then((data) => {
			dispatch(setTotal(data));
		})
		.catch((error) => console.log(error));
};

export const getData = (currentPage, filters = {}, sorts = {}) => (
	dispatch,
	getState
) => {
	dispatch(setIsLoading(true));
	return realtyAPI
		.paginate(currentPage, filters, sorts)
		.then((data) => {
			dispatch(setData(data));
			dispatch(getTotal(filters));
			const hasNextPage =
				Math.ceil(getState().realty.total / 2) !== currentPage;
			dispatch(setHasNextPage(hasNextPage));
			if (hasNextPage) dispatch(setCurrentPage(currentPage + 1));
			dispatch(setIsLoading(false));
		})
		.catch((error) => {
			dispatch(setIsLoading(false));
			if (
				error?.response?.data?.message === "minPrice must be less than maxPrice"
			)
				message.error("Минимальная цена должна быть больше максимальной!");
		});
};

export const getHasNextPage = () => async (dispatch, getState) => {
	return (
		Math.ceil(getState().realty.total / 2) !== getState().realty.currentPage
	);
};

export const getCurrentPage = () => async (dispatch, getState) => {
	return getState().realty.currentPage;
};

export const getFilters = () => async (dispatch, getState) => {
	return getState().realty.filters;
};

export const getSorts = () => async (dispatch, getState) => {
	return getState().realty.sorts;
};
