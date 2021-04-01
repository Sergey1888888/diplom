import * as axios from "axios";

let token = localStorage.getItem("token");
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
};
