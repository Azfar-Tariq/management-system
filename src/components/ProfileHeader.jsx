import { IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const containerStyle = {
	display: "flex",
	alignItems: "center",
	gap: "5px",
	padding: "10px 20px",
	background: "rgba(255, 255, 255, 0.00)",
	boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
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
	color: "#050505",
	fontFamily: "Open Sans",
	fontSize: "16px",
	fontWeight: "600",
};
const lastStyle = {
	color: "#65676B",
	fontFamily: "Open Sans",
	fontSize: "12px",
	fontWeight: "400",
};
function ProfileHeader() {
	const users = useSelector((state) => state.sidebar.users);
	const selectedUser = useSelector((state) => state.sidebar.selectedUser);

	const selectedUserData = users.find((user) => user.id === selectedUser);

	if (!selectedUserData) {
		return null;
	}

	return (
		<div style={containerStyle}>
			<AccountCircleIcon style={iconStyle} />
			<div style={nameMessageStyle}>
				<p style={nameStyle}>{selectedUserData.name}</p>
				<p style={lastStyle}>Last Seen at {selectedUserData.lastSeen}</p>
			</div>
			<Tooltip title='Voice Call'>
				<IconButton>
					<CallIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title='Video Call'>
				<IconButton>
					<VideoCallIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title='Information'>
				<IconButton>
					<InfoIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
}

export default ProfileHeader;
