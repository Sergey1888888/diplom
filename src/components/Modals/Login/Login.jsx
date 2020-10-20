import React from "react";
import { Button, Input } from "antd";
import QueueAnim from "rc-queue-anim";

const Login = ({ setIsReg }) => {
	return (
		<QueueAnim type="top">
			<div key="1" className="loginForm_title noselect">
				Вход
			</div>
			<div key="2" className="loginForm_title__wrap noselect">
				<span className="lfAfterTitileText">Нет аккаунта?</span>
				<span onClick={() => setIsReg(true)} className="reg lfAfterTitileText">
					Регистрация
				</span>
			</div>
			<QueueAnim className="loginForm_inputWrap">
				<div key="1">
					<Input
						className="loginForm_input email mb20"
						placeholder="E-mail"
						allowClear
					/>
					<Input.Password
						key="2"
						className="loginForm_input password"
						placeholder="Пароль"
					/>
				</div>
			</QueueAnim>
			<div key="3" className="loginForm_forgotPass">
				Забыли пароль?
			</div>
			<Button className="loginFormBtn" type="primary">
				Войти
			</Button>
		</QueueAnim>
	);
};

export default Login;
