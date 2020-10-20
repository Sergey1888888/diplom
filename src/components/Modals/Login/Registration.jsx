import React from "react";
import { Button, Input } from "antd";
import QueueAnim from "rc-queue-anim";

const Registration = ({ setIsReg }) => {
	return (
		<QueueAnim type="top">
			<div key="1" className="loginForm_title noselect">
				Регистрация
			</div>
			<div key="2" className="loginForm_title__wrap noselect">
				<span className="lfAfterTitileText">Есть аккаунт?</span>
				<span onClick={() => setIsReg(false)} className="log lfAfterTitileText">
					Вход
				</span>
			</div>
			<QueueAnim className="loginForm_inputWrap inputWrapReg">
				<div key="1">
					<Input
						className="loginForm_input fio mb20"
						placeholder="ФИО"
						allowClear
					/>
				</div>
				<div key="2">
					<Input
						className="loginForm_input phone mb20"
						placeholder="Номер телефона"
						allowClear
					/>
				</div>
				<div key="3">
					<Input
						className="loginForm_input emailReg mb20"
						placeholder="E-mail"
						allowClear
					/>
				</div>
				<div key="4">
					<Input.Password
						className="loginForm_input passwordReg"
						placeholder="Пароль"
					/>
				</div>
			</QueueAnim>
			<Button className="loginFormBtn" type="primary">
				Продолжить
			</Button>
		</QueueAnim>
	);
};

export default Registration;
