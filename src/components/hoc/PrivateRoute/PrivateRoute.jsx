import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
	const profile = useSelector((state) => state.auth.profile);
	return (
		<Route
			{...rest}
			render={() => {
				return profile ? children : <Redirect to="/" />;
			}}
		/>
	);
};

export default PrivateRoute;
