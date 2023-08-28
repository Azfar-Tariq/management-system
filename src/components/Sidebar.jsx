import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Tooltip } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Search from "../components/Search";
import "../styles/css/sidebar.css";
import ChatContainer from "./ChatContainer";
import axios from "axios";

function Sidebar() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://64e8891d99cf45b15fdfba9b.mockapi.io/users")
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => {
				console.error("Error fetching users:", error);
			});
	}, []);
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
				{users.map((user) => (
					<ChatContainer
						key={user.id}
						name={user.name}
						lastMessage={user.lastMessage}
						lastSeen={user.lastSeen}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
