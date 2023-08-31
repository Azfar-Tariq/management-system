import { useSelector } from "react-redux";
import React from "react";

const leftMessage = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	color: "#050505",
	backgroundColor: "#E4E6EB",
	padding: "8px",
	borderRadius: "8px",
	margin: "8px",
};
const rightMessage = {
	display: "flex",
	flexDirection: "row-reverse",
	flexWrap: "wrap",
	color: "white",
	backgroundColor: "#0084FF",
	padding: "8px",
	borderRadius: "8px",
	margin: "8px",
};
function MessagesDisplay() {
	const messages = useSelector((state) => state.sidebar.messages);

	return (
		<div>
			{messages.map((message) => (
				<div key={message.id}>
					<p style={message.isRight ? rightMessage : leftMessage}>
						{message.message1}
					</p>
					<p style={message.isRight ? rightMessage : leftMessage}>
						{message.message2}
					</p>
					<p style={message.isRight ? rightMessage : leftMessage}>
						{message.message3}
					</p>
				</div>
			))}
		</div>
	);
}

export default MessagesDisplay;
