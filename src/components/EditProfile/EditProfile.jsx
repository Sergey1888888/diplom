import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import * as Yup from "yup";
import "./../Profile/Profile.css";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions";

const EditProfile = ({ profile, setEditMode }) => {
	const [password, setPassword] = useState("");
	const [telegram, setTelegram] = useState(profile?.telegram);
	const [vk, setVk] = useState(profile?.vk);
	const [whatsup, setWhatsup] = useState(profile?.whatsup);
	const userId = useSelector((state) => state.auth.userId);
	const dispatch = useDispatch();
	return (
		<div className="data">
			<Formik
				initialValues={{
					password,
					telegram,
					vk,
					whatsup,
				}}
				validationSchema={Yup.object({
					password: Yup.string().matches(
						new RegExp(
							"^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
						),
						"Пароль должен состоять из букв верхнего и нижнего регистра, как минимум 1 цифры и 1 спец. символа. Минимальная длина - 8 символов."
					),
					telegram: Yup.string()
						.matches(new RegExp("^@[a-zA-Z0-9]"), "Введите логин Telegram")
						.nullable(),
					vk: Yup.string()
						.matches(
							new RegExp(
								"(http://|https://)?(www.)?(vk.com|vkontakte.ru)/(id(d{9})|[a-zA-Z0-9_.]+)"
							),
							"Введите ссылку на страницу ВК"
						)
						.nullable(),
					whatsup: Yup.string()
						.matches(
							new RegExp(
								"^(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+$"
							),
							"Введите телефон WhatsApp"
						)
						.nullable(),
				})}
				onSubmit={(values, { setSubmitting }) => {
					let updatedData = {};
					for (const [key, value] of Object.entries(values)) {
						if (value !== "") updatedData[key] = value;
					}
					dispatch(updateProfile(userId, updatedData));
					setSubmitting(false);
					setEditMode(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form id="profileForm" layout="vertical">
						<Form.Item name="password" hasFeedback={true}>
							<span className="fw500 fs24">Пароль: </span>
							<Input
								className="data-item"
								name="password"
								placeholder="Пароль"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Form.Item>
						<Form.Item name="telegram" hasFeedback={true}>
							<span className="fw500 fs24">Telegram: </span>
							<Input
								className="data-item"
								name="telegram"
								placeholder="Логин Telegram"
								value={telegram}
								onChange={(event) => setTelegram(event.target.value)}
							/>
						</Form.Item>
						<Form.Item name="vk" hasFeedback={true}>
							<span className="fw500 fs24">VK: </span>
							<Input
								className="data-item"
								name="vk"
								placeholder="Ссылка на страницу VK"
								value={vk}
								onChange={(event) => setVk(event.target.value)}
							/>
						</Form.Item>
						<Form.Item name="whatsup" hasFeedback={true}>
							<span className="fw500 fs24">WhatsApp: </span>
							<Input
								className="data-item"
								name="whatsup"
								placeholder="Логин WhatsApp"
								value={whatsup}
								onChange={(event) => setWhatsup(event.target.value)}
								maxLength={11}
							/>
						</Form.Item>
						<Button type="primary" htmlType="submit">
							Сохранить
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditProfile;
