import React, { useEffect } from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Preloader from "../Common/Preloader/Preloader";
import axios from "axios";

const createDirectChat = (authObject, username) => {
	axios({
		method: "put",
		url: "https://api.chatengine.io/chats/",
		data: {
			usernames: [username],
			is_direct_chat: true,
		},
		headers: authObject,
	});
};

const Chat = () => {
	const userId = useSelector((state) => state.auth.userId);
	const password = localStorage.getItem("__password");
	const location = useLocation();
	useEffect(() => {
		if (location.state) {
			const { isNotMe, authObject, username } = location.state;
			if (isNotMe) createDirectChat(authObject, username);
		}
	}, [location]);

	return (
		<div style={{ width: "100vw" }}>
			<ChatEngine
				projectID="a3a43f92-82fe-42e9-8fd2-e860fa532324"
				userName={userId}
				userSecret={password}
				height="calc(100vh - 90px)"
				renderNewChatForm={(creds) => (
					<div className="fw500 fs24" style={{ padding: "18px 16px 10px" }}>
						Диалоги
					</div>
				)}
				renderChatFeed={(chatAppState) => {
					if (chatAppState.conn === null)
						return (
							<Preloader
								style={{
									display: "grid",
									placeItems: "center",
									marginTop: "20px",
								}}
							/>
						);
					if (chatAppState.activeChat) return <ChatFeed />;
					else
						return (
							<div
								className="fw500 fs24"
								style={{
									display: "grid",
									placeItems: "center",
									marginTop: "20px",
									height: "37px",
								}}
							>
								Вы не выбрали чат
							</div>
						);
				}}
			/>
		</div>
	);
};

export default Chat;
