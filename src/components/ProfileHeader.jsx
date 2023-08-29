import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import { Avatar, Drawer, IconButton, Tooltip } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";

function ProfileHeader() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setDrawerOpen(open);
	};

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

	const drawerContent = (
		<div style={{ width: "350px" }}>
			<Avatar />
		</div>
	);

	return (
		<div style={containerStyle}>
			<AccountCircleIcon style={iconStyle} />
			<div style={nameMessageStyle}>
				<p style={nameStyle}>Meg</p>
				<p style={lastStyle}>Last Seen at 20:18</p>
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
				<IconButton onClick={toggleDrawer(true)}>
					<InfoIcon />
				</IconButton>
			</Tooltip>
			<Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
				{drawerContent}
			</Drawer>
		</div>
	);
}

export default ProfileHeader;
