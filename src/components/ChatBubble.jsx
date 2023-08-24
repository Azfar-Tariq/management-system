import React from "react";

function ChatBubble({ position, content }) {
	const isLeft = position === "left";
	const isRight = position === "right";

	const containerStyle = {
		display: "flex",
		flexDirection: isRight ? "row-reverse" : "row",
		padding: "10px",
	};

	const messageStyle = {
		backgroundColor: isLeft ? "#e0e0e0" : "#4A85F6",
		color: isLeft ? "black" : "white",
		padding: "8px",
		borderRadius: "8px",
	};

	return (
		<div style={containerStyle}>
			<div style={messageStyle}>{content}</div>
		</div>
	);
}

export default ChatBubble;
