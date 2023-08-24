import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import { IconButton, Tooltip } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";

function ProfileHeader() {
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
	return (
		<div style={containerStyle}>
			<AccountCircleIcon style={iconStyle} />
			<div style={nameMessageStyle}>
				<p>Meg</p>
				<p>Last Seen at 22: 08</p>
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
