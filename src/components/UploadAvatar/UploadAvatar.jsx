import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { token } from "./../../api/api";
import { getProfile } from "./../../redux/actions";

function beforeUpload(file) {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("Вы можете загружать только JPG и PNG файлы!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Изображение должно быть меньше 2 МБ!");
	}
	return isJpgOrPng && isLt2M;
}

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

	render() {
		const { loading } = this.state;
		const uploadButton = (
			<div>
				{loading ? <LoadingOutlined /> : <PlusOutlined />}
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		);
		return (
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action={`https://nestjs-test-api.herokuapp.com/users/upload/${this.props.userId}`}
				beforeUpload={beforeUpload}
				onChange={this.handleChange}
				method="PUT"
				headers={{ Authorization: `Bearer ${token}` }}
			>
				{this.props.avatar ? (
					loading ? (
						<LoadingOutlined />
					) : (
						<img
							src={this.props.avatar}
							alt="avatar"
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
	};
};

export default connect(mapStateToProps, { getProfile })(Avatar);
