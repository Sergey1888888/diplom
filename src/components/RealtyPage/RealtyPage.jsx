import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import {
	deleteIsNotFound,
	deleteSelectedRealty,
	getRealtyById,
} from "../../redux/actions";
import Preloader from "../Common/Preloader/Preloader";
import RealtyInfo from "../RealtyInfo/RealtyInfo";

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
	const SampleNextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					color: "black",
					fontSize: "20px",
					lineHeight: "1.5715",
				}}
				onClick={onClick}
			>
				<RightOutlined />
			</div>
		);
	};

	const SamplePrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					color: "black",
					fontSize: "20px",
					lineHeight: "1.5715",
				}}
				onClick={onClick}
			>
				<LeftOutlined />
			</div>
		);
	};

	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	if (isNotFound)
		return (
			<Result
				status="404"
				title="404"
				subTitle="Объявление не найдено"
				extra={
					<Button type="primary" onClick={() => history.goBack()}>
						Назад
					</Button>
				}
			/>
		);
	if (isLoading || !realty.photos) return <Preloader className="preloader" />;
	return (
		<div style={{ width: "100%", marginTop: "52px" }}>
			<h1
				style={{ display: "grid", placeItems: "center" }}
				className="fw500 fs24"
			>
				Фото
			</h1>
			<div style={{ width: "70%", height: "475px", margin: "0 auto" }}>
				<Carousel
					dots={false}
					arrows
					{...settings}
					style={{ margin: "auto 0", height: "100%" }}
				>
					{realty.photos.map((url) => (
						<img
							key={realty._id}
							style={{ width: "80%", height: "100%", margin: "0 auto" }}
							src={url}
							alt="realty"
						/>
					))}
				</Carousel>
			</div>
			<h1
				style={{ marginTop: "52px", display: "grid", placeItems: "center" }}
				className="fw500 fs24"
			>
				Параметры
			</h1>
			<RealtyInfo realty={realty} />
		</div>
	);
};

export default RealtyPage;
