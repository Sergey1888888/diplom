import React from "react";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { token } from "./../../api/api";
import { getProfile } from "./../../redux/actions";
import Preloader from "./../Common/Preloader/Preloader";
import axios from "axios";

class Avatar extends React.Component {
	state = {
		loading: false,
	};

	handleChange = (info) => {
		if (info.file.status === "uploading") {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === "done") {
			this.props.getProfile(this.props.userId).then(() => {
				this.setState({ loading: false });
			});
		}
	};

	beforeUpload = (file) => {
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("Вы можете загружать только JPG и PNG файлы!");
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Изображение должно быть меньше 2 МБ!");
		}
		if (isJpgOrPng && isLt2M) {
			const formData = new FormData();
			formData.append("avatar", file, file.name);
			const instance = axios.create({
				baseURL: "https://api.chatengine.io/users/",
				headers: {
					"PRIVATE-KEY": "e5999050-82b6-4266-821e-1ac2a2f93e62",
				},
			});
			instance.patch(`${this.props.userChatId}/`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		}
		return isJpgOrPng && isLt2M;
	};

	render() {
		const { loading } = this.state;
		const uploadButton = (
			<div>
				{loading ? <Preloader /> : <PlusOutlined />}
				<div style={{ marginTop: 8 }}>Загрузить</div>
			</div>
		);
		return (
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action={`https://nestjs-test-api.herokuapp.com/users/upload/${this.props.userId}`}
				beforeUpload={this.beforeUpload}
				onChange={this.handleChange}
				method="PUT"
				headers={{ Authorization: `Bearer ${token}` }}
			>
				{this.props.avatar ? (
					loading ? (
						<Preloader />
					) : (
						<img
							src={this.props.avatar}
							alt="avatar"
							style={{ width: "100%", height: "100%", objectFit: "fill" }}
							className="noselect"
							draggable="false"
						/>
					)
				) : (
					uploadButton
				)}
			</Upload>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,
		avatar: state.users.profile?.avatar,
		userChatId: state.users.profile?.userChatId,
	};
};

export default connect(mapStateToProps, { getProfile })(Avatar);
