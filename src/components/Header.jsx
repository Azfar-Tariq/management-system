import { IconButton, Tooltip } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";

import Avatar from "./Avatar";

import "../styles/css/header.css";

function Header() {
	return (
		<div className='header'>
			<div className='title'>
				<p className='hello'>Hello, Lekan</p>
				<p className='greet'>Have a nice day</p>
			</div>
			<div className='profile-noti'>
				<Tooltip title='Notifications'>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Tooltip>
				<hr />
				<div className='name-role'>
					<p className='name'>Lekan Okeowo</p>
					<p className='role'>Admin</p>
				</div>
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
