import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const containerStyle = {
	display: "flex",
	flexDirection: "column",
	gap: "5px",
	padding: "5px 0px",
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

const divStyle = {
	display: "flex",
	alignItems: "center",
	gap: "10px",
};
const timeStyle = {
	color: "#65676B",
	fontFamily: "Open Sans",
	fontSize: "11px",
	fontWeight: "400",
};
function ChatContainer({ name, lastMessage, lastSeen, onClick, isSelected }) {
	return (
		<div
			style={containerStyle}
			onClick={onClick}
			className={isSelected ? "selected" : ""}
		>
			<div style={divStyle}>
				<AccountCircleIcon style={iconStyle} />
				<div style={nameMessageStyle}>
					<p style={nameStyle}>{name}</p>
					<p style={lastStyle}>{lastMessage}</p>
				</div>
				<p style={timeStyle}>{lastSeen}</p>
			</div>
		</div>
	);
}

export default ChatContainer;
