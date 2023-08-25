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
	const nameStyle = {
		fontSize: "14px",
		fontWeight: "600",
		fontFamily: "Open Sans",
	};
	const lastStyle = {
		color: "#65676B",
		fontFamily: "Open Sans",
		fontSize: "12px",
		fontWeight: "400",
	};
	const timeStyle = {
		color: "#65676B",
		fontFamily: "Open Sans",
		fontSize: "11px",
		fontWeight: "400",
	};
	return (
		<div style={containerStyle}>
			<AccountCircleIcon style={iconStyle} />
			<div style={nameMessageStyle}>
				<p style={nameStyle}>{props.name}</p>
				<p style={lastStyle}>{props.last}</p>
			</div>
			<p style={timeStyle}>{props.time}</p>
		</div>
	);
}

export default ChatContainer;
