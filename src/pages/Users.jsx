import React from "react";
import "../styles/css/dashboard.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import TuneIcon from "@mui/icons-material/Tune";
import { IconButton } from "@mui/material";
import CustomizedDialogs from "../components/Dialog";

function Users() {
	return (
		<div className='dashboard'>
			<Header />
			<h2>Users</h2>
			<div className='search'>
				<Search />
				<CustomizedDialogs />
				<Dropdown text='Sort By' />
				<Dropdown text='Saved Search' b='ashfijsa' />
				<IconButton>
					<TuneIcon />
				</IconButton>
			</div>
		</div>
	);
}
export default Users;
