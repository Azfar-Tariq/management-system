import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

function ChatContainer() {
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

	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		gap: "5px",
		cursor: "pointer",
		transition: "background-color: 0.3s, box-shadow: 0.3s",
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
		fontSize: "14px",
		fontWeight: "600",
		fontFamily: "Open Sans",
	};
	const lastStyle = {
		color: "#65676B",
		fontFamily: "Open Sans",
		fontSize: "12px",
		fontWeight: "400",
	};

	const divStyle = {
		display: "flex",
		alignItems: "center",
		gap: "10px",
	};
	const timeStyle = {
		color: "#65676B",
		fontFamily: "Open Sans",
		fontSize: "11px",
		fontWeight: "400",
	};
	return (
		<div style={containerStyle}>
			{users.map((user) => (
				<div style={divStyle}>
					<AccountCircleIcon style={iconStyle} />
					<div style={nameMessageStyle}>
						<p style={nameStyle}>{user.name}</p>
						<p style={lastStyle}>{user.lastMessage}</p>
					</div>
					<p style={timeStyle}>{user.lastSeen}</p>
				</div>
			))}
		</div>
	);
}

export default ChatContainer;
