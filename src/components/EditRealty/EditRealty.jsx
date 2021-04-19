import { Button } from "antd";
import React, { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditRealtyForm from "../EditRealtyForm/EditRealtyForm";
import { ProfileContext } from "../Profile/Profile";
import RealtyImageUploader from "./../RealtyImageUploader/RealtyImageUploader";
import {
	RealtyPageHeaderContext,
	SearchPageHeaderContext,
} from "./../Header/Header";

const EditRealty = ({ realty, setShowEditRealty, toCreate, isAdmin }) => {
	const [isAllowedImage, setIsAllowedImage] = useState(true);
	const isUpdating = useSelector((state) => state.realty.isUpdating);
	const { fileList } = useContext(
		toCreate
			? SearchPageHeaderContext
			: isAdmin
			? RealtyPageHeaderContext
			: ProfileContext
	);
	const formRef = useRef();

	const handleUpload = () => {
		formRef.current.handleSubmit();
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<RealtyImageUploader
				setIsAllowedImage={setIsAllowedImage}
				toCreate={toCreate}
				isAdmin={isAdmin}
			/>
			<EditRealtyForm
				realty={realty}
				formRef={formRef}
				toCreate={toCreate}
				fileList={fileList}
				setShowEditRealty={setShowEditRealty}
				isAdmin={isAdmin}
			/>
			<Button
				className="fw300"
				type="primary"
				loading={isUpdating}
				onClick={handleUpload}
				disabled={!isAllowedImage || fileList.length === 0}
				style={{ width: "200px", alignSelf: "center" }}
			>
				{toCreate ? "Создать объявление" : "Обновить данные"}
			</Button>
		</div>
	);
};

export default EditRealty;
