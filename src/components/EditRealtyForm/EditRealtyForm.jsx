import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputNumber, Input, Form, Radio, Select, Switch } from "formik-antd";
import { Collapse } from "antd";
import "./EditRealtyForm.css";
import { useDispatch, useSelector } from "react-redux";
import { createRealty, updateRealty } from "../../redux/actions";

const EditRealtyForm = ({
	realty,
	formRef,
	toCreate,
	fileList,
	setShowEditRealty,
}) => {
	const [price, setPrice] = useState(toCreate ? null : realty.price);
	const [street, setStreet] = useState(toCreate ? null : realty.street);
	const [houseNumber, setHouseNumber] = useState(
		toCreate ? null : realty.houseNumber
	);
	const [type, setType] = useState(toCreate ? null : realty.type);
	const [district, setDistrict] = useState(toCreate ? null : realty.district);
	const [area, setArea] = useState(toCreate ? null : realty.area);
	const [floor, setFloor] = useState(toCreate ? null : realty.floor);
	const [description, setDescription] = useState(
		toCreate ? null : realty.description
	);
	const [encumbranceType, setEncumbranceType] = useState(
		toCreate ? null : realty.encumbranceType
	);
	const [apartmentNumber, setApartmentNumber] = useState(
		toCreate ? null : realty.apartmentNumber
	);
	const [liveArea, setLiveArea] = useState(toCreate ? null : realty.liveArea);
	const [kitchenArea, setKitchenArea] = useState(
		toCreate ? null : realty.kitchenArea
	);
	const [rooms, setRooms] = useState(toCreate ? null : realty.rooms);
	const [renovation, setRenovation] = useState(
		toCreate ? null : realty.renovation
	);
	const [bathroom, setBathroom] = useState(toCreate ? null : realty.bathroom);
	const [bathroomType, setBathroomType] = useState(
		toCreate ? null : realty.bathroomType
	);
	const [balconyNumber, setBalconyNumber] = useState(
		toCreate ? null : realty.balconyNumber
	);
	const [landArea, setLandArea] = useState(toCreate ? null : realty.landArea);
	const [floorsNumber, setFloorsNumber] = useState(
		toCreate ? null : realty.floorsNumber
	);
	const [elevatorsNumber, setElevatorsNumber] = useState(
		toCreate ? null : realty.elevatorsNumber
	);
	const [wallsMaterial, setWallsMaterial] = useState(
		toCreate ? null : realty.wallsMaterial
	);
	const [buildingClass, setBuildingClass] = useState(
		toCreate ? null : realty.buildingClass
	);
	const [lodgingClass, setLodgingClass] = useState(
		toCreate ? null : realty.lodgingClass
	);
	const [parkingSpace, setParkingSpace] = useState(
		toCreate ? null : realty.parkingSpace
	);
	const [furniture, setFurniture] = useState(
		toCreate ? null : realty.furniture
	);
	const [appliances, setAppliances] = useState(
		toCreate ? null : realty.appliances
	);
	const [internet, setInternet] = useState(toCreate ? null : realty.internet);
	const [conditionerNumber, setConditionerNumber] = useState(
		toCreate ? null : realty.conditionerNumber
	);
	const [heating, setHeating] = useState(toCreate ? null : realty.heating);
	const [powerSupply, setPowerSupply] = useState(
		toCreate ? null : realty.powerSupply
	);
	const [fireExtinguishing, setFireExtinguishing] = useState(
		toCreate ? null : realty.fireExtinguishing
	);
	const [sewerage, setSewerage] = useState(toCreate ? null : realty.sewerage);
	const [gas, setGas] = useState(toCreate ? null : realty.gas);
	const [waterSupply, setWaterSupply] = useState(
		toCreate ? null : realty.waterSupply
	);
	const [conditioning, setConditioning] = useState(
		toCreate ? null : realty.conditioning
	);
	const [ventilation, setVentilation] = useState(
		toCreate ? null : realty.ventilation
	);
	const [security, setSecurity] = useState(toCreate ? null : realty.security);
	const [windowsType, setWindowsType] = useState(
		toCreate ? null : realty.windowsType
	);
	const [ceilingHeight, setCeilingHeight] = useState(
		toCreate ? null : realty.ceilingHeight
	);
	const [concierge, setConcierge] = useState(
		toCreate ? null : realty.concierge
	);
	const [plotType, setPlotType] = useState(toCreate ? null : realty.plotType);
	const [enteringType, setEnteringType] = useState(
		toCreate ? null : realty.enteringType
	);
	const [layoutType, setLayoutType] = useState(
		toCreate ? null : realty.layoutType
	);
	const [territoryType, setTerritoryType] = useState(
		toCreate ? null : realty.territoryType
	);
	const ownerId = useSelector((state) => state.auth.userId);
	const dispatch = useDispatch();

	return (
		<Formik
			innerRef={formRef}
			initialValues={{
				price: price,
				street: street,
				houseNumber: houseNumber,
				type: type,
				district: district,
				area: area,
				floor: floor,
				description: description,
				encumbranceType: encumbranceType,
				apartmentNumber: apartmentNumber,
				liveArea: liveArea,
				kitchenArea: kitchenArea,
				rooms: rooms,
				renovation: renovation,
				bathroom: bathroom,
				bathroomType: bathroomType,
				balconyNumber: balconyNumber,
				landArea: landArea,
				floorsNumber: floorsNumber,
				elevatorsNumber: elevatorsNumber,
				wallsMaterial: wallsMaterial,
				buildingClass: buildingClass,
				lodgingClass: lodgingClass,
				parkingSpace: parkingSpace,
				furniture: furniture,
				appliances: appliances,
				internet: internet,
				conditionerNumber: conditionerNumber,
				heating: heating,
				powerSupply: powerSupply,
				fireExtinguishing: fireExtinguishing,
				sewerage: sewerage,
				gas: gas,
				waterSupply: waterSupply,
				conditioning: conditioning,
				ventilation: ventilation,
				security: security,
				windowsType: windowsType,
				ceilingHeight: ceilingHeight,
				concierge: concierge,
				plotType: plotType,
				enteringType: enteringType,
				layoutType: layoutType,
				territoryType: territoryType,
			}}
			validationSchema={Yup.object({
				price: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable()
					.required("Обязательное поле"),
				street: Yup.string()
					.matches(
						new RegExp("^[А-Я]{1}[а-яё ]+$"),
						"Введите название улицы с заглавной буквы"
					)
					.nullable()
					.required("Обязательное поле"),
				houseNumber: Yup.string()
					.matches(new RegExp("^[0-9А-Я]+$"), "Введите номер дома")
					.nullable()
					.required("Обязательное поле"),
				type: Yup.string().nullable().required("Обязательное поле"),
				district: Yup.string().nullable().required("Обязательное поле"),
				area: Yup.string()
					// eslint-disable-next-line no-useless-escape
					.matches(new RegExp("^[0-9.]+$"), "Положительное число")
					.nullable()
					.required("Обязательное поле"),
				floor: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable()
					.required("Обязательное поле"),
				description: Yup.string().nullable().required("Обязательное поле"),
				encumbranceType: Yup.string().nullable().required("Обязательное поле"),
				apartmentNumber: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				liveArea: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				kitchenArea: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				rooms: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				renovation: Yup.string()
					.nullable()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите качество ремонта")
					.nullable(),
				bathroom: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				bathroomType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип санузла")
					.nullable(),
				balconyNumber: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				landArea: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				floorsNumber: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				elevatorsNumber: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				wallsMaterial: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите материал стен")
					.nullable(),
				buildingClass: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите класс здания")
					.nullable(),
				lodgingClass: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите класс жилья")
					.nullable(),
				furniture: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите описание мебели")
					.nullable(),
				conditionerNumber: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				parkingSpace: Yup.boolean().nullable(),
				appliances: Yup.boolean().nullable(),
				internet: Yup.boolean().nullable(),
				heating: Yup.boolean().nullable(),
				powerSupply: Yup.boolean().nullable(),
				fireExtinguishing: Yup.boolean().nullable(),
				sewerage: Yup.boolean().nullable(),
				gas: Yup.boolean().nullable(),
				waterSupply: Yup.boolean().nullable(),
				conditioning: Yup.boolean().nullable(),
				ventilation: Yup.boolean().nullable(),
				security: Yup.boolean().nullable(),
				windowsType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип окон")
					.nullable(),
				ceilingHeight: Yup.string()
					.matches(new RegExp("^[0-9]+$"), "Положительное число")
					.nullable(),
				concierge: Yup.boolean().nullable(),
				plotType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип участка")
					.nullable(),
				enteringType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип пропуска")
					.nullable(),
				layoutType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип планировки")
					.nullable(),
				territoryType: Yup.string()
					.matches(new RegExp("^[А-Яа-яёЁ]+$"), "Введите тип территории")
					.nullable(),
			})}
			onSubmit={(values, { setSubmitting }) => {
				const formData = new FormData();
				let photos = [];
				fileList.forEach((file) => {
					if (file.hasOwnProperty("size"))
						formData.append("files", file.originFileObj);
					else photos.push(file.url);
				});
				const stringPhotos = JSON.stringify(photos);
				formData.append("photosToSave", stringPhotos);
				if (toCreate) {
					dispatch(createRealty(values, formData, ownerId, setShowEditRealty));
				} else {
					dispatch(
						updateRealty(
							realty._id,
							values,
							formData,
							realty.ownerId,
							setShowEditRealty
						)
					);
				}
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form
					id="realtyForm"
					style={{
						width: "95%",
						display: "flex",
						flexDirection: "column",
						margin: "0 auto",
						justifyContent: "space-between",
						padding: "15px 0 15px",
					}}
				>
					<Collapse defaultActiveKey={["1"]} ghost>
						<Collapse.Panel header="Основная информация" key="1">
							<h4>Стоимость</h4>
							<Form.Item
								name="price"
								hasFeedback={true}
								style={{ display: "flex", justifyContent: "space-between" }}
							>
								<InputNumber
									style={{ width: "100%" }}
									name="price"
									placeholder="Введите стоимость"
									value={price}
									onChange={(value) => setPrice(value)}
								/>
							</Form.Item>
							<h4>Название улицы</h4>
							<Form.Item name="street" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="street"
									placeholder="Введите название улицы"
									value={street}
									onChange={(event) => setStreet(event.target.value)}
								/>
							</Form.Item>
							<h4>Номер дома</h4>
							<Form.Item name="houseNumber" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="houseNumber"
									placeholder="Введите номер дома"
									maxLength={4}
									value={houseNumber}
									onChange={(event) => setHouseNumber(event.target.value)}
								/>
							</Form.Item>
							<h4>Тип недвижимости</h4>
							<Form.Item name="type" hasFeedback={true}>
								<Radio.Group
									name="type"
									onChange={(event) => setType(event.target.value)}
									value={type}
									optionType="button"
									buttonStyle="solid"
									style={{
										display: "grid",
										gridTemplateAreas: '"kv d kom" "of zd t"',
										gridTemplateRows: "repeat(2, 1fr)",
										gridTemplateColumns: "repeat(3, 1fr)",
										textAlign: "center",
										gap: "10px",
									}}
								>
									<Radio.Button style={{ gridArea: "kv" }} value="Квартира">
										Квартира
									</Radio.Button>
									<Radio.Button style={{ gridArea: "d" }} value="Дом">
										Дом
									</Radio.Button>
									<Radio.Button style={{ gridArea: "kom" }} value="Комната">
										Комната
									</Radio.Button>
									<Radio.Button style={{ gridArea: "of" }} value="Офис">
										Офис
									</Radio.Button>
									<Radio.Button style={{ gridArea: "zd" }} value="Здание">
										Здание
									</Radio.Button>
									<Radio.Button style={{ gridArea: "t" }} value="Торг. пл.">
										Торг. пл.
									</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<h4>Район</h4>
							<Form.Item name="district" hasFeedback={true}>
								<Select
									name="district"
									onChange={(value) => setDistrict(value)}
									value={district}
								>
									<Select.Option value="Дзержинский">Дзержинский</Select.Option>
									<Select.Option value="Краснооктябрьский">
										Краснооктябрьский
									</Select.Option>
									<Select.Option value="Центральный">Центральный</Select.Option>
									<Select.Option value="Ворошиловский">
										Ворошиловский
									</Select.Option>
									<Select.Option value="Советский">Советский</Select.Option>
									<Select.Option value="Тракторозаводский">
										Тракторозаводский
									</Select.Option>
									<Select.Option value="Кировский">Кировский</Select.Option>
									<Select.Option value="Красноармейский">
										Красноармейский
									</Select.Option>
								</Select>
							</Form.Item>
							<h4>Общая площадь</h4>
							<Form.Item name="area" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="area"
									placeholder="Введите общую площадь"
									value={area}
									onChange={(value) => setArea(value)}
								/>
							</Form.Item>
							<h4>Этаж</h4>
							<Form.Item name="floor" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="floor"
									placeholder="Введите этаж"
									value={floor}
									onChange={(value) => setFloor(value)}
								/>
							</Form.Item>
							<Form.Item name="encumbranceType" hasFeedback={true}>
								<Radio.Group
									name="encumbranceType"
									onChange={(event) => setEncumbranceType(event.target.value)}
									value={encumbranceType}
									optionType="button"
									buttonStyle="solid"
									style={{
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Radio.Button value={0}>Продажа</Radio.Button>
									<Radio.Button value={1}>Аренда</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<h4>Описание</h4>
							<Form.Item name="description" hasFeedback={true}>
								<Input.TextArea
									style={{ width: "100%", height: "120px" }}
									className="fw300"
									name="description"
									placeholder="Введите описание недвижимости"
									value={description}
									onChange={(event) => setDescription(event.target.value)}
								/>
							</Form.Item>
						</Collapse.Panel>
						<Collapse.Panel header="Дополнительная информация" key="2">
							<h4>Номер квартиры</h4>
							<Form.Item name="apartmentNumber" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="apartmentNumber"
									placeholder="Введите номер квартиры"
									value={apartmentNumber}
									onChange={(value) => setApartmentNumber(value)}
								/>
							</Form.Item>
							<h4>Жилая площадь</h4>
							<Form.Item name="liveArea" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="liveArea"
									placeholder="Введите жилую площадь"
									value={liveArea}
									onChange={(value) => setLiveArea(value)}
								/>
							</Form.Item>
							<h4>Площадь кухни</h4>
							<Form.Item name="kitchenArea" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="kitchenArea"
									placeholder="Введите площадь кухни"
									value={kitchenArea}
									onChange={(value) => setKitchenArea(value)}
								/>
							</Form.Item>
							<h4>Количество комнат</h4>
							<Form.Item name="rooms" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="rooms"
									placeholder="Введите количество комнат"
									value={rooms}
									onChange={(value) => setRooms(value)}
								/>
							</Form.Item>
							<h4>Качество ремонта</h4>
							<Form.Item name="renovation" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="renovation"
									placeholder="Введите качество ремонта, например, Евроремонт, Косметический ремонт и т.п."
									value={renovation}
									onChange={(event) => setRenovation(event.target.value)}
								/>
							</Form.Item>
							<h4>Количество санузлов</h4>
							<Form.Item name="bathroom" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="bathroom"
									placeholder="Введите количество санузлов"
									value={bathroom}
									onChange={(value) => setBathroom(value)}
								/>
							</Form.Item>
							<h4>Тип санузла</h4>
							<Form.Item name="bathroomType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="bathroomType"
									placeholder="Введите тип санузла (Раздельный или Общий)"
									value={bathroomType}
									onChange={(event) => setBathroomType(event.target.value)}
								/>
							</Form.Item>
							<h4>Количество балконов</h4>
							<Form.Item name="balconyNumber" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="balconyNumber"
									placeholder="Введите количество балконов"
									value={balconyNumber}
									onChange={(value) => setBalconyNumber(value)}
								/>
							</Form.Item>
							<h4>Площадь участка</h4>
							<Form.Item name="landArea" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="landArea"
									placeholder="Введите площадь участка"
									value={landArea}
									onChange={(value) => setLandArea(value)}
								/>
							</Form.Item>
							<h4>Количество этажей</h4>
							<Form.Item name="floorsNumber" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="floorsNumber"
									placeholder="Например, если сдается/продается двухэтажный дом, то введите 2"
									value={floorsNumber}
									onChange={(value) => setFloorsNumber(value)}
								/>
							</Form.Item>
							<h4>Количество лифтов</h4>
							<Form.Item name="elevatorsNumber" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="elevatorsNumber"
									placeholder="Введите количество лифтов"
									value={elevatorsNumber}
									onChange={(value) => setElevatorsNumber(value)}
								/>
							</Form.Item>
							<h4>Материал стен</h4>
							<Form.Item name="wallsMaterial" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="wallsMaterial"
									placeholder="Введите материал стен"
									value={wallsMaterial}
									onChange={(event) => setWallsMaterial(event.target.value)}
								/>
							</Form.Item>
							<h4>Класс постройки</h4>
							<Form.Item name="buildingClass" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="buildingClass"
									placeholder="Введите класс постройки"
									value={buildingClass}
									onChange={(event) => setBuildingClass(event.target.value)}
								/>
							</Form.Item>
							<h4>Класс жилья</h4>
							<Form.Item name="lodgingClass" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="lodgingClass"
									placeholder="Введите класс жилья"
									value={lodgingClass}
									onChange={(event) => setLodgingClass(event.target.value)}
								/>
							</Form.Item>
							<h4>Описание мебели</h4>
							<Form.Item name="furniture" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="furniture"
									placeholder="Введите описание мебели"
									value={furniture}
									onChange={(event) => setFurniture(event.target.value)}
								/>
							</Form.Item>
							<h4>Тип окон</h4>
							<Form.Item name="windowsType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="windowsType"
									placeholder="Введите тип окон, например, Пластиковые"
									value={windowsType}
									onChange={(event) => setWindowsType(event.target.value)}
								/>
							</Form.Item>
							<h4>Высота потолка</h4>
							<Form.Item name="ceilingHeight" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="ceilingHeight"
									placeholder="Введите высоту потолка"
									value={ceilingHeight}
									onChange={(value) => setCeilingHeight(value)}
								/>
							</Form.Item>
							<h4>Тип участка</h4>
							<Form.Item name="plotType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="plotType"
									placeholder="Введите тип участка, например, Садоводство и т.п."
									value={plotType}
									onChange={(event) => setPlotType(event.target.value)}
								/>
							</Form.Item>
							<h4>Тип пропуска</h4>
							<Form.Item name="enteringType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="enteringType"
									placeholder="Свободный вход или по пропускам"
									value={enteringType}
									onChange={(event) => setEnteringType(event.target.value)}
								/>
							</Form.Item>
							<h4>Планировка</h4>
							<Form.Item name="layoutType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="layoutType"
									placeholder="Открытая или кабинетная"
									value={layoutType}
									onChange={(event) => setLayoutType(event.target.value)}
								/>
							</Form.Item>
							<h4>Тип территории</h4>
							<Form.Item name="territoryType" hasFeedback={true}>
								<Input
									style={{ width: "100%" }}
									name="territoryType"
									placeholder="Закрытая или открытая"
									value={territoryType}
									onChange={(event) => setTerritoryType(event.target.value)}
								/>
							</Form.Item>
							<h4>Количество кондиционеров</h4>
							<Form.Item name="conditionerNumber" hasFeedback={true}>
								<InputNumber
									style={{ width: "100%" }}
									name="conditionerNumber"
									value={conditionerNumber}
									onChange={(value) => setConditionerNumber(value)}
								/>
							</Form.Item>
							<h4>Есть ли кондиционирование</h4>
							<Form.Item name="conditioning" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="conditioning"
									defaultChecked={conditioning}
									onChange={(value) => setConditioning(value)}
								/>
							</Form.Item>
							<h4>Есть ли парковочное место</h4>
							<Form.Item name="parkingSpace" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="parkingSpace"
									defaultChecked={parkingSpace}
									onChange={(value) => setParkingSpace(value)}
								/>
							</Form.Item>
							<h4>Есть ли бытовая техника</h4>
							<Form.Item name="appliances" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="appliances"
									defaultChecked={appliances}
									onChange={(value) => setAppliances(value)}
								/>
							</Form.Item>
							<h4>Есть ли интернет</h4>
							<Form.Item name="internet" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="internet"
									defaultChecked={internet}
									onChange={(value) => setInternet(value)}
								/>
							</Form.Item>
							<h4>Есть ли отопление</h4>
							<Form.Item name="heating" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="heating"
									defaultChecked={heating}
									onChange={(value) => setHeating(value)}
								/>
							</Form.Item>
							<h4>Есть ли электроснабжение</h4>
							<Form.Item name="powerSupply" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="powerSupply"
									defaultChecked={powerSupply}
									onChange={(value) => setPowerSupply(value)}
								/>
							</Form.Item>
							<h4>Есть ли система пожаротушения</h4>
							<Form.Item name="fireExtinguishing" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="fireExtinguishing"
									defaultChecked={fireExtinguishing}
									onChange={(value) => setFireExtinguishing(value)}
								/>
							</Form.Item>
							<h4>Есть ли канализация</h4>
							<Form.Item name="sewerage" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="sewerage"
									defaultChecked={sewerage}
									onChange={(value) => setSewerage(value)}
								/>
							</Form.Item>
							<h4>Есть ли газ</h4>
							<Form.Item name="gas" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="gas"
									defaultChecked={gas}
									onChange={(value) => setGas(value)}
								/>
							</Form.Item>
							<h4>Есть ли водоснабжение</h4>
							<Form.Item name="waterSupply" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="waterSupply"
									defaultChecked={waterSupply}
									onChange={(value) => setWaterSupply(value)}
								/>
							</Form.Item>
							<h4>Есть ли вентиляция</h4>
							<Form.Item name="ventilation" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="ventilation"
									defaultChecked={ventilation}
									onChange={(value) => setVentilation(value)}
								/>
							</Form.Item>
							<h4>Есть ли охрана</h4>
							<Form.Item name="security" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="security"
									defaultChecked={security}
									onChange={(value) => setSecurity(value)}
								/>
							</Form.Item>
							<h4>Есть ли консьерж</h4>
							<Form.Item name="concierge" hasFeedback={true}>
								<Switch
									style={{ width: "50px" }}
									name="concierge"
									defaultChecked={concierge}
									onChange={(value) => setConcierge(value)}
								/>
							</Form.Item>
						</Collapse.Panel>
					</Collapse>
				</Form>
			)}
		</Formik>
	);
};

export default EditRealtyForm;
