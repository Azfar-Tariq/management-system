import React, { useEffect, useState } from "react";
import "../styles/css/sidebar.css";
import ProfileHeader from "./ProfileHeader";
import MessageEditor from "./MessageEditor";
import Search from "../components/Search";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ChatContainer from "./ChatContainer";
import MessagesDisplay from "./MessagesDisplay";
import axios from "axios";

function Sidebar() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [messages, setMessages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await axios.get(
					"https://64e8891d99cf45b15fdfba9b.mockapi.io/users"
				);
				setLoading(false);
				setUsers(response.data);
			} catch (err) {
				console.error("Error fetching users: ", err);
			}
		}

		fetchUsers();
	});

	const handleUserClick = async (userId) => {
		try {
			setSelectedUser(userId);
			const response = await axios.get(
				`https://64e8891d99cf45b15fdfba9b.mockapi.io/users/${userId}/messages`
			);
			setMessages(response.data);
		} catch (err) {
			console.error("Error fetching messages: ", err);
		}
	};

	return (
		<div>
			{loading ? (
				<CircularProgress />
			) : (
				<div className='message'>
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
						<Search setSearchTerm={setSearchTerm} flexValue={0} />
						<div className='chats'>
							{users
								.filter((user) =>
									user.name.toLowerCase().includes(searchTerm.toLowerCase())
								)
								.map((user) => (
									<ChatContainer
										key={user.id}
										id={user.id}
										name={user.name}
										lastMessage={user.lastMessage}
										lastSeen={user.lastSeen}
										onClick={() => handleUserClick(user.id)}
										isSelected={selectedUser === user.id}
									/>
								))}
						</div>
					</div>
					<div className='message-thread'>
						<div className='profile-header'>
							<ProfileHeader selectedUser={selectedUser} users={users} />
						</div>
						<div className='messages'>
							<MessagesDisplay messages={messages} />
						</div>
						<div className='message-editor'>
							<MessageEditor />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Sidebar;
