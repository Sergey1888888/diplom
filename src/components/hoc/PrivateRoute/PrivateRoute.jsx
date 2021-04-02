import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { message } from "antd";

const PrivateRoute = ({ children, ...rest }) => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	return (
		<Route
			{...rest}
			render={() => {
				return isAuth ? (
					children
				) : (
					<div>
						{message.info("Вы не авторизованы")}
						<Redirect to="/" />
					</div>
				);
			}}
		/>
	);
};

export default PrivateRoute;
