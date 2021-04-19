import { Rate, Tooltip } from "antd";
import React from "react";
import "./RealtyInfo.css";

const RealtyInfo = ({ realty }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div
				style={{
					width: "100%",
					display: "grid",
					gridTemplateColumns: "2fr 8fr",
					gridAutoRows: "minmax(30px, fit-content)",
					gap: "20px",
				}}
				className="parameters"
			>
				<div>Стоимость:</div>
				<div>{realty.price} рублей</div>
				<div>Адрес:</div>
				<div>{`Улица ${realty.street}, дом ${realty.houseNumber}`}</div>
				{realty.bathroom && <div>Санузел:</div>}
				{realty.bathroom && (
					<div>{`${realty.bathroom} ${realty.bathroomType}`}</div>
				)}
				{realty.balconyNumber && <div>Количество балконов:</div>}
				{realty.balconyNumber && <div>{realty.balconyNumber}</div>}
				{realty.rooms && <div>Количество комнат:</div>}
				{realty.rooms && <div>{realty.rooms}</div>}
				{realty.type && <div>Тип недвижимости:</div>}
				{realty.type && <div>{realty.type}</div>}
				{realty.floor && <div>Этаж:</div>}
				{realty.floor && <div>{realty.floor}</div>}
				{realty.area && <div>Общая площадь:</div>}
				{realty.area && (
					<div>
						{`${realty.area} м`}
						<sup>2</sup>
					</div>
				)}
				{realty.liveArea && <div>Жилая площадь:</div>}
				{realty.liveArea && (
					<div>
						{`${realty.liveArea} м`}
						<sup>2</sup>
					</div>
				)}
				{realty.kitchenArea && <div>Площадь кухни:</div>}
				{realty.kitchenArea && (
					<div>
						{`${realty.kitchenArea} м`}
						<sup>2</sup>
					</div>
				)}
				{realty.landArea && <div>Площадь участка:</div>}
				{realty.landArea && (
					<div>
						{`${realty.landArea} м`}
						<sup>2</sup>
					</div>
				)}
				{realty.floorsNumber && <div>Количество этажей:</div>}
				{realty.floorsNumber && <div>{realty.floorsNumber}</div>}
				{realty.elevatorsNumber && <div>Количество лифтов:</div>}
				{realty.elevatorsNumber && <div>{realty.elevatorsNumber}</div>}
				{realty.wallsMaterial && <div>Материал стен:</div>}
				{realty.wallsMaterial && <div>{realty.wallsMaterial}</div>}
				{realty.buildingClass && <div>Класс здания:</div>}
				{realty.buildingClass && <div>{realty.buildingClass}</div>}
				{realty.lodgingClass && <div>Класс жилья:</div>}
				{realty.lodgingClass && <div>{realty.lodgingClass}</div>}
				{realty.renovation && <div>Ремонт:</div>}
				{realty.renovation && <div>{realty.renovation}</div>}
				{realty.parkingSpace && <div>Парковочное место:</div>}
				{realty.parkingSpace && (
					<div>{realty.parkingSpace ? "Есть" : "Нет"}</div>
				)}
				{realty.appliances && <div>Бытовая техника:</div>}
				{realty.appliances && <div>{realty.appliances ? "Есть" : "Нет"}</div>}
				{realty.internet && <div>Интернет:</div>}
				{realty.internet && <div>{realty.internet ? "Есть" : "Нет"}</div>}
				{realty.conditionerNumber && <div>Количество кондиционеров:</div>}
				{realty.conditionerNumber && <div>{realty.conditionerNumber}</div>}
				{realty.heating && <div>Отопление:</div>}
				{realty.heating && <div>{realty.heating ? "Есть" : "Нет"}</div>}
				{realty.powerSupply && <div>Электроснабжение:</div>}
				{realty.powerSupply && <div>{realty.powerSupply ? "Есть" : "Нет"}</div>}
				{realty.fireExtinguishing && <div>Система пожаротушения:</div>}
				{realty.fireExtinguishing && (
					<div>{realty.fireExtinguishing ? "Есть" : "Нет"}</div>
				)}
				{realty.sewerage && <div>Канализация:</div>}
				{realty.sewerage && <div>{realty.sewerage ? "Есть" : "Нет"}</div>}
				{realty.gas && <div>Газ:</div>}
				{realty.gas && <div>{realty.gas ? "Есть" : "Нет"}</div>}
				{realty.waterSupply && <div>Водоснабжение:</div>}
				{realty.waterSupply && <div>{realty.waterSupply ? "Есть" : "Нет"}</div>}
				{realty.conditioning && <div>Кондиционирование:</div>}
				{realty.conditioning && (
					<div>{realty.conditioning ? "Есть" : "Нет"}</div>
				)}
				{realty.ventilation && <div>Вентиляция:</div>}
				{realty.ventilation && <div>{realty.ventilation ? "Есть" : "Нет"}</div>}
				{realty.security && <div>Охрана:</div>}
				{realty.security && <div>{realty.security ? "Есть" : "Нет"}</div>}
				{realty.windowsType && <div>Тип окон:</div>}
				{realty.windowsType && <div>{realty.windowsType}</div>}
				{realty.ceilingHeight && <div>Высота потолка:</div>}
				{realty.ceilingHeight && <div>{`${realty.ceilingHeight} м`}</div>}
				{realty.concierge && <div>Консьерж:</div>}
				{realty.concierge && <div>{realty.concierge ? "Есть" : "Нет"}</div>}
				{realty.plotType && <div>Тип участка:</div>}
				{realty.plotType && <div>{realty.plotType}</div>}
				{realty.enteringType && <div>Вход:</div>}
				{realty.enteringType && <div>{realty.enteringType}</div>}
				{realty.layoutType && <div>Планировка:</div>}
				{realty.layoutType && <div>{realty.layoutType}</div>}
				{realty.territoryType && <div>Тип территории:</div>}
				{realty.territoryType && <div>{realty.territoryType}</div>}
				{realty.furniture && <div>Описание мебели:</div>}
				{realty.furniture && <div>{realty.furniture}</div>}
				{realty.description && <div>Описание:</div>}
				{realty.description && <div>{realty.description}</div>}
			</div>
			<h1 style={{ display: "grid", placeItems: "center", marginTop: "52px" }}>
				Инфраструктурный рейтинг
			</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
				className="infr fw500"
			>
				{realty.infrastructureRating.school && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.school} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Образование</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.school) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.health && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.health} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Здравоохранение</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.health) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.transit_station && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.transit_station} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Общественный транспорт</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.transit_station) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.pharmacy && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.pharmacy} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Аптеки</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.pharmacy) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.gym && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.gym} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Спорт</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={Math.ceil(realty.infrastructureRating.gym) / 2}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.hair_care && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.hair_care} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Парикмахерские</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.hair_care) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.cafe && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.cafe} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Общественное питание</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={Math.ceil(realty.infrastructureRating.cafe) / 2}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.grocery_or_supermarket && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.grocery_or_supermarket} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Продукты питания</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(
											realty.infrastructureRating.grocery_or_supermarket
										) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.atm && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.atm} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Банкоматы</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={Math.ceil(realty.infrastructureRating.atm) / 2}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{realty.infrastructureRating.shopping_mall && (
					<div>
						<Tooltip
							title={
								<div>{`По мнению эксперта ${realty.infrastructureRating.shopping_mall} / 10`}</div>
							}
							placement="top"
						>
							<div>
								<div>Шоппинг</div>
								<Rate
									style={{ fontSize: "22px", lineHeight: "1" }}
									disabled
									allowHalf
									defaultValue={
										Math.ceil(realty.infrastructureRating.shopping_mall) / 2
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
			</div>
		</div>
	);
};

export default RealtyInfo;
