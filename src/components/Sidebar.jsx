import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Tooltip } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Search from "../components/Search";
import "../styles/css/sidebar.css";
import ChatContainer from "./ChatContainer";

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='header'>
				<h2>Chats</h2>
				<div className='icons'>
					<Tooltip title='More'>
						<IconButton>
							<MoreHorizIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='New Message'>
						<IconButton>
							<AddCommentIcon />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			<Search flexValue={0} />
			<div className='chats'>
				<ChatContainer />
			</div>
		</div>
	);
}

export default Sidebar;
