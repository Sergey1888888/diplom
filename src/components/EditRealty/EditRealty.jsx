import React, { useContext, useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message, Button } from "antd";
import { ProfileContext } from "../Profile/Profile";
import Modal from "antd/lib/modal/Modal";
import { token } from "./../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { updatePhotos } from "../../redux/actions";

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

const EditRealty = ({ realty, setShowEditRealty }) => {
	const { fileList, setFileList } = useContext(ProfileContext);
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");
	const isUpdating = useSelector((state) => state.realty.isUpdating);
	const dispatch = useDispatch();

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

	const handleChange = ({ fileList }) => setFileList(fileList);

	const beforeUpload = (file) => {
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("Вы можете загружать только JPG и PNG файлы!");
			return false;
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Изображение должно быть меньше 2 МБ!");
			return false;
		}
		setFileList([...fileList, file]);
		return false;
	};

	const handleUpload = () => {
		const formData = new FormData();
		let photos = [];
		fileList.forEach((file) => {
			if (file.hasOwnProperty("size"))
				formData.append("files", file.originFileObj);
			else photos.push(file.url);
		});
		const stringPhotos = JSON.stringify(photos);
		formData.append("photosToSave", stringPhotos);
		dispatch(updatePhotos(realty._id, formData, realty.ownerId)).then(() =>
			setShowEditRealty(false)
		);
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Добавить</div>
		</div>
	);
	return (
		<>
			<Upload
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				beforeUpload={beforeUpload}
			>
				{fileList.length >= 8 ? null : uploadButton}
			</Upload>
			<Button
				className="fw300"
				type="primary"
				loading={isUpdating}
				onClick={handleUpload}
			>
				Обновить данные
			</Button>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="realty" style={{ width: "100%" }} src={previewImage} />
			</Modal>
		</>
	);
};

export default EditRealty;
//TODO: вернуть picture-card но before upload оставить
// handle upload вынести в кнопку сохранения редактирования
