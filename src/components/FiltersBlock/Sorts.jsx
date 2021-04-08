import React, { useEffect, useState } from "react";
import { Form, Radio } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateSorts } from "../../redux/actions";
import { Button } from "antd";

const Sorts = ({ setShowSorts }) => {
	const dispatch = useDispatch();
	const sorts = useSelector((state) => state.realty.sorts);
	const sortsType = useSelector((state) => state.realty.sortsType);
	const [isChanged, setIsChanged] = useState(false);
	const [type, setType] = useState(1);

	const onTypeChange = (e) => {
		setType(e.target.value);
		setIsChanged(true);
	};

	useEffect(() => {
		sortsType && setType(sortsType);
	}, [sortsType]);
	return (
		<div
			key="2"
			style={{
				position: "absolute",
				left: "50%",
				top: "50px",
				width: "50%",
				backgroundColor: "#fff",
			}}
		>
			<Formik
				initialValues={{
					type: 1 && sortsType,
				}}
				validationSchema={Yup.object({
					type: Yup.number(),
				})}
				onSubmit={(values, { setSubmitting }) => {
					const { type } = values;
					let res = null;
					switch (type) {
						case 1: {
							res = { sorts: { price: 1 }, sortsType: type };
							break;
						}
						case 2: {
							res = { sorts: { price: -1 }, sortsType: type };
							break;
						}
						case 3: {
							res = { sorts: { rooms: 1 }, sortsType: type };
							break;
						}
						case 4: {
							res = { sorts: { rooms: -1 }, sortsType: type };
							break;
						}
						case 5: {
							res = { sorts: { area: 1 }, sortsType: type };
							break;
						}
						case 6: {
							res = { sorts: { area: -1 }, sortsType: type };
							break;
						}
						default: {
							res = {
								price: 1,
								rooms: null,
								area: null,
							};
						}
					}
					dispatch(updateSorts(res));
					setShowSorts(false);
					setIsChanged(false);
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
							padding: "20px 0 15px",
						}}
					>
						<Form.Item name="type" hasFeedback={true}>
							<Radio.Group
								name="type"
								onChange={onTypeChange}
								value={type}
								optionType="button"
								buttonStyle="solid"
								style={{
									display: "flex",
									flexDirection: "column",
									textAlign: "center",
									gap: "15px",
								}}
							>
								<Radio.Button value={1}>Сначала дешёвые</Radio.Button>
								<Radio.Button value={2}>Сначала дорогие</Radio.Button>
								<Radio.Button value={3}>Сначала малокомнатные</Radio.Button>
								<Radio.Button value={4}>Сначала многокомнатные</Radio.Button>
								<Radio.Button value={5}>Сначала малая площадь</Radio.Button>
								<Radio.Button value={6}>Сначала большая площадь</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Button type="primary" htmlType="submit" disabled={!isChanged}>
							Применить
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Sorts;
