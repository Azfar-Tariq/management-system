import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import MessageBox from "./MessageBox";

function MessageEditor() {
	const containerStyle = {
		display: "flex",
		alignItem: "center",
		padding: "10px",
		boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
	};
	return (
		<div style={containerStyle}>
			<Tooltip title='Add'>
				<IconButton>
					<AddCircleIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title='Photo'>
				<IconButton>
					<PhotoLibraryIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title='GIF'>
				<IconButton>
					<GifBoxIcon />
				</IconButton>
			</Tooltip>
			<MessageBox />
			<Tooltip title='Like'>
				<IconButton>
					<ThumbUpIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
}

export default MessageEditor;
