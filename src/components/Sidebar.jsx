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
				<ChatContainer name='Meg' last='My Last Message' time='3h' />
				<ChatContainer name='Adam West' last='My Last Message2' time='14h' />
				<ChatContainer name='Brian' last='My Last Message3' time='1d' />
				<ChatContainer name='Lois' last='My Last Message4' time='2d' />
				<ChatContainer name='Stewie' last='My Last Message5' time='2w' />
				<ChatContainer name='Meg' last='My Last Message' time='3h' />
				<ChatContainer name='Adam West' last='My Last Message2' time='14h' />
				<ChatContainer name='Brian' last='My Last Message3' time='1d' />
				<ChatContainer name='Lois' last='My Last Message4' time='2d' />
				<ChatContainer name='Stewie' last='My Last Message5' time='2w' />
			</div>
		</div>
	);
}

export default Sidebar;
