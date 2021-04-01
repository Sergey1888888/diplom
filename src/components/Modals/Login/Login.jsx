import React from "react";
import { Input, Form } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const Login = ({ closeModal, onLoginButtonClicked }) => {
	const profile = useSelector((state) => state.auth.profile);
	if (profile != null) {
		closeModal();
	}
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={Yup.object({
				email: Yup.string()
					.email("Неправильный email")
					.required("Обязательное поле"),
				password: Yup.string()
					.matches(
						new RegExp(
							"^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
						),
						"Пароль должен состоять из букв верхнего и нижнего регистра, как минимум 1 цифры и 1 спец. символа. Минимальная длина - 8 символов."
					)
					.required("Обязательное поле"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				onLoginButtonClicked(values.email, values.password);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form id="loginForm">
					<Form.Item name="email" hasFeedback={true} showValidateSuccess={true}>
						<Input type="email" name="email" placeholder="E-mail" />
					</Form.Item>
					<Form.Item
						name="password"
						hasFeedback={true}
						showValidateSuccess={true}
					>
						<Input.Password
							type="password"
							name="password"
							placeholder="Пароль"
							maxLength={20}
						/>
					</Form.Item>
				</Form>
			)}
		</Formik>
	);
};

export default Login;
