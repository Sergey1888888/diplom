import * as axios from "axios";

export let token = localStorage.getItem("token");
let instance = axios.create({
	baseURL: "https://nestjs-test-api.herokuapp.com/",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});
export const setToken = (access_token) => {
	if (access_token != null) localStorage.setItem("token", access_token);
	else localStorage.removeItem("token");
	token = localStorage.getItem("token");
	instance = axios.create({
		baseURL: "https://nestjs-test-api.herokuapp.com/",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const authAPI = {
	getLogin() {
		return instance.get("profile").then((response) => response.data);
	},
	Login(email, password) {
		return instance
			.post("auth/login", { email, password })
			.then((response) => response.data);
	},
	Registration(profileData) {
		return instance
			.post("users", profileData)
			.then((response) => response.data);
	},
};

export const usersAPI = {
	getProfile(id) {
		return instance.get(`users/${id}`).then((response) => response.data);
	},
	updateAvatar(file, id) {
		const formData = new FormData();
		formData.append("avatar", file);
		return instance
			.put(`users/upload/${id}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => response.data);
	},
};

export const realtyAPI = {
	getById(id) {
		return instance.get(`realty/${id}`).then((response) => response.data);
	},
	paginate(currentPage, filters = {}, sorts = {}) {
		console.log(
			"API",
			`realty?limit=5&page=${currentPage}&filter=${JSON.stringify(
				filters
			)}&sort=${JSON.stringify(sorts)}`
		);
		return instance
			.get(
				`realty?limit=5&page=${currentPage}&filter=${JSON.stringify(
					filters
				)}&sort=${JSON.stringify(sorts)}`
			)
			.then((response) => response.data);
	},
	getTotal(filters = {}) {
		return instance
			.get(`realty/total?filter=${JSON.stringify(filters)}`)
			.then((response) => response.data);
	},
};
