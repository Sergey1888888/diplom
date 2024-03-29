import React, { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { ProfileContext } from "../Profile/Profile";
import Modal from "antd/lib/modal/Modal";
import {
	RealtyPageHeaderContext,
	SearchPageHeaderContext,
} from "../Header/Header";

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

const RealtyImageUploader = ({ setIsAllowedImage, toCreate, isAdmin }) => {
	const { fileList, setFileList } = useContext(
		toCreate
			? SearchPageHeaderContext
			: isAdmin
			? RealtyPageHeaderContext
			: ProfileContext
	);
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
		);
	};

	const handleChange = ({ fileList }) => {
		setFileList(fileList);
		const notAllowed = fileList.filter((photo) => {
			if (photo.type === "image/jpeg" || photo.type === "image/png")
				return false;
			else return true;
		});
		if (notAllowed.length !== 0) setIsAllowedImage(false);
		else setIsAllowedImage(true);
	};

	const beforeUpload = (file) => {
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("Вы можете загружать только JPG и PNG файлы!");
			setIsAllowedImage(false);
			return false;
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Изображение должно быть меньше 2 МБ!");
			setIsAllowedImage(false);
			return false;
		}
		setFileList([...fileList, file]);
		return false;
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Добавить</div>
		</div>
	);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Upload
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				beforeUpload={beforeUpload}
			>
				{fileList.length >= 5 ? null : uploadButton}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="realty" style={{ width: "100%" }} src={previewImage} />
			</Modal>
		</div>
	);
};

export default RealtyImageUploader;
