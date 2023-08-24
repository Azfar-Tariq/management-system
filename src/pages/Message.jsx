import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/css/message.css";
import ProfileHeader from "../components/ProfileHeader";
import MessageEditor from "../components/MessageEditor";
import ChatBubble from "../components/ChatBubble";

function Message() {
	return (
		<div className='message'>
			<div className='message-sidebar'>
				<Sidebar />
			</div>
			<div className='message-thread'>
				<ProfileHeader />
				<div className='messages'>
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
					<ChatBubble position='left' content='Friend Message' />
					<ChatBubble position='right' content='My Message' />
				</div>
				<div className='message-editor'>
					<MessageEditor />
				</div>
			</div>
		</div>
	);
}

export default Message;
