import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useEffect } from "react";

import { fetchMessages, fetchUsers } from "../utils/api";
import ChatContainer from "./ChatContainer";
import MessageEditor from "./MessageEditor";
import MessagesDisplay from "./MessagesDisplay";
import ProfileHeader from "./ProfileHeader";
import Search from "../components/Search";

import "../styles/css/sidebar.css";

import {
	setMessages,
	setSelectedUser,
	setUsers,
} from "../features/sidebarSlice";

function Sidebar() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.sidebar.users);
	const selectedUser = useSelector((state) => state.sidebar.selectedUser);
	const loading = useSelector((state) => state.sidebar.loading);
	const searchTerm = useSelector((state) => state.search.searchTerm);

	useEffect(() => {
		async function fetchData() {
			try {
				const usersData = await fetchUsers();
				dispatch(setUsers(usersData));
			} catch (err) {
				console.error("Error fetching users: ", err);
			}
		}

		fetchData();
	});

	const handleUserClick = async (userId) => {
		try {
			dispatch(setSelectedUser(userId));
			const messagesData = await fetchMessages(userId);
			dispatch(setMessages(messagesData));
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
						<Search flexValue={0} />
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
							<ProfileHeader />
						</div>
						<div className='messages'>
							<MessagesDisplay />
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
