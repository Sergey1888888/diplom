import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteSelectedRealty, getRealtyById } from "../../redux/actions";

const RealtyPage = ({ match }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRealtyById(match.params.id));
		return () => {
			dispatch(deleteSelectedRealty());
		};
	}, [dispatch, match.params.id]);
	return <div>REALTY</div>;
};

export default RealtyPage;
