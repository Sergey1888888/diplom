import React from "react";
import { Button, Input } from "antd";
import QueueAnim from "rc-queue-anim";

const Registration = ({ setIsReg }) => {
	return (
		<QueueAnim type="top">
			<div key="1" className="loginForm_title fw500 fs24 lh32 noselect">
				Регистрация
			</div>
			<div key="2" className="loginForm_title__wrap noselect">
				<span className="lfAfterTitileText fw300 fs14 ls">Есть аккаунт?</span>
				<span
					onClick={() => setIsReg(false)}
					className="log lfAfterTitileText fw300 fs14 ls"
				>
					Вход
				</span>
			</div>
			<QueueAnim className="loginForm_inputWrap inputWrapReg">
				<div key="1">
					<Input
						className="loginForm_input fw500 fio mb20"
						placeholder="ФИО"
						allowClear
					/>
				</div>
				<div key="2">
					<Input
						className="loginForm_input fw500 phone mb20"
						placeholder="Номер телефона"
						allowClear
					/>
				</div>
				<div key="3">
					<Input
						className="loginForm_input fw500 emailReg mb20"
						placeholder="E-mail"
						allowClear
					/>
				</div>
				<div key="4">
					<Input.Password
						className="loginForm_input fw500 passwordReg"
						placeholder="Пароль"
					/>
				</div>
			</QueueAnim>
			<Button className="loginFormBtn fw500 ls" type="primary">
				Продолжить
			</Button>
		</QueueAnim>
	);
};

export default Registration;
