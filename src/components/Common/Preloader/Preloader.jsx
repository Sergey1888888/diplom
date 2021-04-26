import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Preloader = ({ size = "small", className, style }) => {
	const fontSizeLoader = size === "large" ? "120px" : "24px";
	const fontSizeText = size === "large" ? "40px" : "12px";
	return (
		<div className={className} style={style}>
			<Spin
				indicator={
					<LoadingOutlined
						style={{
							fontSize: [fontSizeLoader],
						}}
					/>
				}
				tip={<div style={{ fontSize: [fontSizeText] }}>Загрузка...</div>}
			/>
		</div>
	);
};

export default Preloader;
