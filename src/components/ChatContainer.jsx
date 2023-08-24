import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ChatContainer(props) {
	const containerStyle = {
		display: "flex",
		alignItems: "center",
		gap: "5px",
		padding: "5px",
		cursor: "pointer",
		transition: "background-color: 0.3s, box-shadow: 0.3s",
	};
	const iconStyle = {
		fontSize: "3rem",
	};
	const nameMessageStyle = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	};
	return (
		<div style={containerStyle}>
			<AccountCircleIcon style={iconStyle} />
			<div style={nameMessageStyle}>
				<p>{props.name}</p>
				<p>{props.last}</p>
			</div>
			<p>{props.time}</p>
		</div>
	);
}

export default ChatContainer;
