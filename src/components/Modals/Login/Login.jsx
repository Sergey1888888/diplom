import React from "react";
import { Button, Input } from "antd";
import QueueAnim from "rc-queue-anim";

const Login = ({ setIsReg, onLoginButtonClicked }) => {
	return (
		<QueueAnim type="top">
			<div key="1" className="loginForm_title fw500 fs24 lh32 noselect">
				Вход
			</div>
			<div key="2" className="loginForm_title__wrap noselect">
				<span className="lfAfterTitileText fw300 fs14 ls">Нет аккаунта?</span>
				<span
					onClick={() => setIsReg(true)}
					className="reg lfAfterTitileText fw300 fs14 ls"
				>
					Регистрация
				</span>
			</div>
			<QueueAnim className="loginForm_inputWrap">
				<div key="1">
					<Input
						className="loginForm_input fw500 email mb20"
						placeholder="E-mail"
						allowClear
					/>
				</div>
				<div key="2">
					<Input.Password
						key="2"
						className="loginForm_input fw500 password"
						placeholder="Пароль"
					/>
				</div>
			</QueueAnim>
			<QueueAnim type="right">
				<div key="1" className="loginForm_forgotPass fw300 fs14 ls">
					Забыли пароль?
				</div>
			</QueueAnim>
			<Button
				onClick={onLoginButtonClicked}
				className="loginFormBtn fw500 ls"
				type="primary"
			>
				Войти
			</Button>
		</QueueAnim>
	);
};

export default Login;
