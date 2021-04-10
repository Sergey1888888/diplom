import React from "react";
import { Input, Form } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

const Registration = ({ onRegistrationButtonClicked, closeModal }) => {
	return (
		<Formik
			initialValues={{
				name: "",
				surname: "",
				patronymic: "",
				phoneNumber: "",
				email: "",
				password: "",
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.matches(new RegExp("^[а-яёЁА-Я]+$"), "Введите имя")
					.required("Обязательное поле"),
				surname: Yup.string()
					.matches(new RegExp("^[а-яёЁА-Я]+$"), "Введите фамилию")
					.required("Обязательное поле"),
				patronymic: Yup.string()
					.matches(new RegExp("^[а-яёЁА-Я]+$"), "Введите отчество")
					.required("Обязательное поле"),
				phoneNumber: Yup.string()
					.matches(
						new RegExp(
							"^(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+$"
						),
						"Неправильный номер телефона"
					)
					.required("Обязательное поле"),
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
				onRegistrationButtonClicked(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form id="regForm">
					<h4>ФИО</h4>
					<Form.Item
						name="surname"
						hasFeedback={true}
						showValidateSuccess={true}
					>
						<Input type="text" name="surname" placeholder="Фамилия" />
					</Form.Item>
					<Form.Item name="name" hasFeedback={true} showValidateSuccess={true}>
						<Input type="text" name="name" placeholder="Имя" />
					</Form.Item>
					<Form.Item
						name="patronymic"
						hasFeedback={true}
						showValidateSuccess={true}
					>
						<Input type="text" name="patronymic" placeholder="Отчество" />
					</Form.Item>
					<h4>Номер телефона</h4>
					<Form.Item
						name="phoneNumber"
						hasFeedback={true}
						showValidateSuccess={true}
					>
						<Input
							type="tel"
							name="phoneNumber"
							placeholder="Номер телефона"
							maxLength={11}
						/>
					</Form.Item>
					<h4>Email</h4>
					<Form.Item name="email" hasFeedback={true} showValidateSuccess={true}>
						<Input type="email" name="email" placeholder="E-mail" />
					</Form.Item>
					<h4>Пароль</h4>
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

export default Registration;
// <>
// 	<div key="1" className="loginForm_title fw500 fs24 lh32 noselect">
// 		Регистрация
// 	</div>
// 	<div key="2" className="loginForm_title__wrap noselect">
// 		<span className="lfAfterTitileText fw300 fs14 ls">Есть аккаунт?</span>
// 		<span
// 			onClick={() => setIsReg(false)}
// 			className="log lfAfterTitileText fw300 fs14 ls"
// 		>
// 			Вход
// 		</span>
// 	</div>
// 	<div key="1">
// 		<Input
// 			className="loginForm_input fw500 fio mb20"
// 			placeholder="ФИО"
// 			allowClear
// 		/>
// 	</div>
// 	<div key="2">
// 		<Input
// 			className="loginForm_input fw500 phone mb20"
// 			placeholder="Номер телефона"
// 			allowClear
// 		/>
// 	</div>
// 	<div key="3">
// 		<Input
// 			className="loginForm_input fw500 emailReg mb20"
// 			placeholder="E-mail"
// 			allowClear
// 		/>
// 	</div>
// 	<div key="4">
// 		<Input.Password
// 			className="loginForm_input fw500 passwordReg"
// 			placeholder="Пароль"
// 		/>
// 	</div>
// 	<Button className="loginFormBtn fw500 ls" type="primary">
// 		Продолжить
// 	</Button>
// </>
