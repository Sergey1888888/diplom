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
					gridAutoRows: "30px",
					gap: "20px",
				}}
			>
				<div className="fw500 fs16 cols" style={{ textAlign: "end" }}>
					<div>Стоимость:</div>
					<div>Адрес:</div>
					{realty.bathroom && <div>Санузел:</div>}
					{realty.balconyNumber && <div>Количество балконов:</div>}
					{realty.rooms && <div>Количество комнат:</div>}
					{realty.type && <div>Тип недвижимости:</div>}
					{realty.floor && <div>Этаж:</div>}
					{realty.area && <div>Общая площадь:</div>}
					{realty.liveArea && <div>Жилая площадь:</div>}
					{realty.kitchenArea && <div>Площадь кухни:</div>}
					{realty.landArea && <div>Площадь участка:</div>}
					{realty.floorsNumber && <div>Количество этажей:</div>}
					{realty.elevatorsNumber && <div>Количество лифтов:</div>}
					{realty.wallsMaterial && <div>Материал стен:</div>}
					{realty.buildingClass && <div>Класс здания:</div>}
					{realty.lodgingClass && <div>Класс жилья:</div>}
					{realty.renovation && <div>Ремонт:</div>}
					{realty.parkingSpace && <div>Парковочное место:</div>}
					{realty.appliances && <div>Бытовая техника:</div>}
					{realty.internet && <div>Интернет:</div>}
					{realty.conditionerNumber && <div>Количество кондиционеров:</div>}
					{realty.heating && <div>Отопление:</div>}
					{realty.powerSupply && <div>Электроснабжение:</div>}
					{realty.fireExtinguishing && <div>Система пожаротушения:</div>}
					{realty.sewerage && <div>Канализация:</div>}
					{realty.gas && <div>Газ:</div>}
					{realty.waterSupply && <div>Водоснабжение:</div>}
					{realty.conditioning && <div>Кондиционирование:</div>}
					{realty.ventilation && <div>Вентиляция:</div>}
					{realty.security && <div>Охрана:</div>}
					{realty.windowsType && <div>Тип окон:</div>}
					{realty.concierge && <div>Консьерж:</div>}
					{realty.plotType && <div>Тип участка:</div>}
					{realty.enteringType && <div>Вход:</div>}
					{realty.layoutType && <div>Планировка:</div>}
					{realty.territoryType && <div>Тип территории:</div>}
					{realty.furniture && <div>Описание мебели:</div>}
				</div>
				<div className="fs15 ls cols">
					<div>{realty.price} рублей</div>
					<div>{`Улица ${realty.street}, дом ${realty.houseNumber}`}</div>
					{realty.bathroom && (
						<div>{`${realty.bathroom} ${realty.bathroomType}`}</div>
					)}
					{realty.balconyNumber && <div>{realty.balconyNumber}</div>}
					{realty.rooms && <div>{realty.rooms}</div>}
					{realty.type && <div>{realty.type}</div>}
					{realty.floor && <div>{realty.floor}</div>}
					{realty.area && (
						<div>
							{`${realty.area} м`}
							<sup>2</sup>
						</div>
					)}
					{realty.liveArea && (
						<div>
							{`${realty.liveArea} м`}
							<sup>2</sup>
						</div>
					)}
					{realty.kitchenArea && (
						<div>
							{`${realty.kitchenArea} м`}
							<sup>2</sup>
						</div>
					)}
					{realty.landArea && (
						<div>
							{`${realty.landArea} м`}
							<sup>2</sup>
						</div>
					)}
					{realty.floorsNumber && <div>{realty.floorsNumber}</div>}
					{realty.elevatorsNumber && <div>{realty.elevatorsNumber}</div>}
					{realty.wallsMaterial && <div>{realty.wallsMaterial}</div>}
					{realty.buildingClass && <div>{realty.buildingClass}</div>}
					{realty.lodgingClass && <div>{realty.lodgingClass}</div>}
					{realty.renovation && <div>{realty.renovation}</div>}
					{realty.parkingSpace && (
						<div>{realty.parkingSpace ? "Есть" : "Нет"}</div>
					)}
					{realty.appliances && <div>{realty.appliances ? "Есть" : "Нет"}</div>}
					{realty.internet && <div>{realty.internet ? "Есть" : "Нет"}</div>}
					{realty.conditionerNumber && <div>{realty.conditionerNumber}</div>}
					{realty.heating && <div>{realty.heating ? "Есть" : "Нет"}</div>}
					{realty.powerSupply && (
						<div>{realty.powerSupply ? "Есть" : "Нет"}</div>
					)}
					{realty.fireExtinguishing && (
						<div>{realty.fireExtinguishing ? "Есть" : "Нет"}</div>
					)}
					{realty.sewerage && <div>{realty.sewerage ? "Есть" : "Нет"}</div>}
					{realty.gas && <div>{realty.gas ? "Есть" : "Нет"}</div>}
					{realty.waterSupply && (
						<div>{realty.waterSupply ? "Есть" : "Нет"}</div>
					)}
					{realty.conditioning && (
						<div>{realty.conditioning ? "Есть" : "Нет"}</div>
					)}
					{realty.ventilation && (
						<div>{realty.ventilation ? "Есть" : "Нет"}</div>
					)}
					{realty.security && <div>{realty.security ? "Есть" : "Нет"}</div>}
					{realty.windowsType && <div>{realty.windowsType}</div>}
					{realty.ceilingHeight && <div>{`${realty.ceilingHeight} м`}</div>}
					{realty.concierge && <div>{realty.concierge ? "Есть" : "Нет"}</div>}
					{realty.plotType && <div>{realty.plotType}</div>}
					{realty.enteringType && <div>{realty.enteringType}</div>}
					{realty.layoutType && <div>{realty.layoutType}</div>}
					{realty.territoryType && <div>{realty.territoryType}</div>}
					{realty.furniture && <div>{realty.furniture}</div>}
					{realty.security && <div>{realty.security ? "Есть" : "Нет"}</div>}
				</div>
			</div>
		</div>
	);
};

export default RealtyInfo;
