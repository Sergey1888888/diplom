import React, { useState } from "react";
import "./Login.css";
import Registration from "./Registration";
import Login from "./Login";

const Form = ({ onFormBackgroundClick }) => {
	const [isReg, setIsReg] = useState(false);
	return (
		<div onClick={onFormBackgroundClick} className="background">
			<div className={"loginForm" + (isReg ? " registration" : "")}>
				<div className="loginFormRel">
					{isReg ? (
						<Registration key="1" setIsReg={setIsReg} />
					) : (
						<Login key="2" setIsReg={setIsReg} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Form;
