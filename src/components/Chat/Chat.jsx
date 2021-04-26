import React, { useState } from "react";
import { ChatEngine, ChatFeed, getOrCreateChat } from "react-chat-engine";
import { useSelector } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";

const Chat = () => {
	const userId = useSelector((state) => state.auth.userId);
	const password = localStorage.getItem("__password");
	const [username, setUsername] = useState("");

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername("")
		);
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button onClick={() => createDirectChat(creds)}>Create</button>
			</div>
		);
	}
	return (
		<div style={{ width: "100vw" }}>
			<ChatEngine
				projectID="a3a43f92-82fe-42e9-8fd2-e860fa532324"
				userName={userId}
				userSecret={password}
				height="calc(100vh - 90px)"
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
				renderNewChatForm={(creds) => renderChatForm(creds)}
			/>
		</div>
	);
};

export default Chat;
