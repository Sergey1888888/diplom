import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import {
	deleteIsNotFound,
	deleteSelectedRealty,
	getRealtyById,
} from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";

const RealtyPage = ({ match }) => {
	const realty = useSelector((state) => state.realty.selectedRealty);
	const isNotFound = useSelector((state) => state.realty.isNotFound);
	const isLoading = useSelector((state) => state.realty.isLoading);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRealtyById(match.params.id));
		return () => {
			dispatch(deleteSelectedRealty());
			dispatch(deleteIsNotFound());
		};
	}, [dispatch, match.params.id]);
	if (isNotFound) return <Redirect to={() => history.goBack()} />;
	if (isLoading) return <Preloader className="preloader" />;
	return <div>{JSON.stringify(realty, null, 2)}</div>;
};

export default RealtyPage;
