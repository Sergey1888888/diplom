import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { InputNumber, Form, Radio, Select } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { LineOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/actions";

const Filters = ({ setShowFilters }) => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.realty.filters);
	const [minPrice, setMinPrice] = useState(null);
	const [maxPrice, setMaxPrice] = useState(null);
	const [rooms, setRooms] = useState(null);
	const [area, setArea] = useState(null);
	const [type, setType] = useState("Офис");
	const [district, setDistrict] = useState(null);
	const onTypeChange = (e) => {
		setType(e.target.value);
	};
	const onDistrictChange = (value) => {
		setDistrict(value);
	};
	useEffect(() => {
		filters.minPrice && setMinPrice(filters.minPrice);
		filters.maxPrice && setMaxPrice(filters.maxPrice);
		filters.rooms && setRooms(filters.rooms);
		filters.area && setArea(filters.area);
		filters.type && setType(filters.type);
		filters.district && setDistrict(filters.district);
	}, [filters]);
	return (
		<div
			key="1"
			style={{
				position: "absolute",
				top: "50px",
				width: "50%",
				backgroundColor: "#fff",
			}}
		>
			<Formik
				initialValues={{
					minPrice: null || filters.minPrice,
					maxPrice: null || filters.maxPrice,
					rooms: null || filters.rooms,
					area: null || filters.area,
					type: "Квартира" && filters.type,
					district: null || filters.district,
				}}
				validationSchema={Yup.object({
					minPrice: Yup.string()
						.matches(new RegExp("^[0-9]+"), "Положительное число")
						.nullable(),
					maxPrice: Yup.string()
						.matches(new RegExp("^[0-9]+"), "Положительное число")
						.nullable(),
					rooms: Yup.string()
						.matches(new RegExp("^[0-9]+"), "Положительное число")
						.nullable(),
					area: Yup.string()
						.matches(new RegExp("^[0-9]+"), "Положительное число")
						.nullable(),
					type: Yup.string(),
					district: Yup.string().nullable(),
				})}
				onSubmit={(values, { setSubmitting }) => {
					console.log("VALUES", values);
					dispatch(updateFilters(values));
					setShowFilters(false);
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form
						id="filtersForm"
						style={{
							width: "80%",
							display: "flex",
							flexDirection: "column",
							margin: "0 auto",
							justifyContent: "space-between",
							padding: "15px 0 15px",
						}}
					>
						<h4>Стоимость</h4>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Form.Item name="minPrice" hasFeedback={true}>
								<InputNumber
									style={{ width: "140px" }}
									name="minPrice"
									min={0}
									placeholder="Мин. стоимость"
									value={minPrice}
									onChange={setMinPrice}
									validate={(value) => {
										let errorMessage;
										if (value != null && maxPrice === null)
											errorMessage = "Максимальная стоимость не указана";
										if (value != null && maxPrice != null && value > maxPrice)
											errorMessage =
												"Максимальная стоимость должна быть больше минимальной";
										return errorMessage;
									}}
								/>
							</Form.Item>
							<div
								style={{
									height: "32px",
									display: "grid",
									placeItems: "center",
								}}
							>
								<LineOutlined />
							</div>
							<Form.Item name="maxPrice" hasFeedback={true}>
								<InputNumber
									style={{ width: "140px" }}
									name="maxPrice"
									min={0}
									placeholder="Макс. стоимость"
									value={maxPrice}
									onChange={setMaxPrice}
									validate={(value) => {
										let errorMessage;
										if (value != null && minPrice === null)
											errorMessage = "Минимальная стоимость не указана";
										if (value != null && minPrice != null && value < minPrice)
											errorMessage =
												"Максимальная стоимость должна быть больше минимальной";
										return errorMessage;
									}}
								/>
							</Form.Item>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<h4>Количество комнат</h4>
								<Form.Item name="rooms" hasFeedback={true}>
									<InputNumber
										style={{ width: "140px" }}
										name="rooms"
										min={0}
										max={10}
										placeholder="Кол-во комнат"
										value={rooms}
										onChange={setRooms}
									/>
								</Form.Item>
							</div>
							<div>
								<h4>Площадь</h4>
								<Form.Item name="area" hasFeedback={true}>
									<InputNumber
										style={{ width: "140px" }}
										name="area"
										min={0}
										placeholder="Мин. площадь"
										value={area}
										onChange={setArea}
									/>
								</Form.Item>
							</div>
						</div>
						<h4>Тип недвижимости</h4>
						<Form.Item name="type" hasFeedback={true}>
							<Radio.Group
								name="type"
								onChange={onTypeChange}
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
						<Form.Item name="district" hasFeedback={true}>
							<Select
								name="district"
								onChange={onDistrictChange}
								value={district}
							>
								<Select.Option value={null}>Все районы</Select.Option>
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
						<Button type="primary" htmlType="submit">
							Применить
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Filters;
