import { Button, Input } from "antd";
import React, { useState } from "react";
import "./Login.css";

const Login = ({onLoginBackgroundClick}) => {
	const [isReg, setIsReg] = useState(false);
	return (
		<div onClick={onLoginBackgroundClick} className="background">
			<div className={"loginForm" + (isReg ? " registration" : "")}>
				<div className="loginFormRel">
					{isReg ? (
						<>
							<div className="loginForm_title noselect">Регистрация</div>
							<div className="loginForm_title__wrap noselect">
								<span className="lfAfterTitileText">Есть аккаунт?</span>
								<span
									onClick={() => setIsReg(false)}
									className="log lfAfterTitileText"
								>
									Вход
								</span>
							</div>
							<Input
								className="loginForm_input fio mb20"
								placeholder="ФИО"
								allowClear
							/>
							<Input
								className="loginForm_input phone mb20"
								placeholder="Номер телефона"
								allowClear
							/>
							<Input
								className="loginForm_input email mb20"
								placeholder="E-mail"
								allowClear
							/>
							<Input.Password
								className="loginForm_input password"
								placeholder="Пароль"
							/>
							<Button className="loginFormBtn" type="primary">
								Продолжить
							</Button>
						</>
					) : (
						<>
							<div className="loginForm_title noselect">Вход</div>
							<div className="loginForm_title__wrap noselect">
								<span className="lfAfterTitileText">Нет аккаунта?</span>
								<span
									onClick={() => setIsReg(true)}
									className="reg lfAfterTitileText"
								>
									Регистрация
								</span>
							</div>
							<Input
								className="loginForm_input email mb20"
								placeholder="E-mail"
								allowClear
							/>
							<Input.Password
								className="loginForm_input password"
								placeholder="Пароль"
							/>
							<div className="loginForm_forgotPass">Забыли пароль?</div>
							<Button className="loginFormBtn" type="primary">
								Войти
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
