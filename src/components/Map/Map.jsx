import React, { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { CloseSquareOutlined, PushpinFilled } from "@ant-design/icons";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popover } from "antd";
import { getCoords } from "../../redux/actions";
import { useHistory } from "react-router";

const Map = () => {
	const coords = useSelector((state) => state.realty.coords);
	const filters = useSelector((state) => state.realty.filters);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCoords(filters));
	}, [dispatch, filters]);
	const [isVisible, setIsVisible] = useState([]);
	const markers = React.useMemo(
		() =>
			coords.map((realty) => {
				let normType = "";
				if (realty.type) {
					normType = realty.type[0].toLowerCase() + realty.type.slice(1);
				}
				return (
					<Marker key={realty.id} latitude={realty.lat} longitude={realty.long}>
						<Popover
							content={
								<div
									style={{ display: "flex", flexDirection: "column" }}
									className="fw300 fs14"
								>
									<img
										src={realty.photo}
										alt="realty"
										style={{ height: "100px" }}
									/>
									<div
										style={{ marginTop: "10px" }}
									>{`ул. ${realty.street}, д. ${realty.houseNumber}`}</div>
									<div>
										{`Общая площадь ${realty.area} м`}
										<sup>2</sup>
									</div>
									<Button
										type="link"
										style={{ alignSelf: "flex-end", paddingRight: "0px" }}
										className="fw300 fs14"
										onClick={() => history.push(`/realty/${realty.id}`)}
									>
										Подробнее
									</Button>
								</div>
							}
							title={
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
									className="fw500 fs16"
								>
									<div>
										{realty.rooms
											? `${realty.rooms} комнатная ${normType}`
											: `${realty.type}`}
									</div>
									<CloseSquareOutlined
										style={{
											fontSize: "20px",
											paddingLeft: "10px",
											color: "#BA0A1B",
										}}
										onClick={() =>
											setIsVisible(isVisible.filter((id) => realty.id !== id))
										}
									/>
								</div>
							}
							trigger="click"
							visible={isVisible.filter((id) => realty.id === id).length !== 0}
							onVisibleChange={(visible) =>
								setIsVisible([...isVisible, realty.id])
							}
						>
							<PushpinFilled style={{ color: "rgb(66, 132, 255)" }} />
						</Popover>
					</Marker>
				);
			}),
		[coords, isVisible]
	);
	const [viewport, setViewport] = useState({
		latitude: 48.707103,
		longitude: 44.516939,
		zoom: 11,
	});
	const closePopovers = () => {
		setIsVisible([]);
	};
	const onViewportChange = (value) => {
		closePopovers();
		setViewport(value);
	};
	return (
		<ReactMapGl
			{...viewport}
			width="60%"
			height="100%"
			mapStyle="mapbox://styles/follex/ckm6poqh3cjbd17o5gtpfc6u3"
			onViewportChange={onViewportChange}
			mapboxApiAccessToken="pk.eyJ1IjoiZm9sbGV4IiwiYSI6ImNrZjN0MXBqYTA2YzAyem5vYWh0OXJ4eWcifQ.T10EKgjFamd6JnCRJr4_Ow"
		>
			{markers}
		</ReactMapGl>
	);
};

export default Map;
