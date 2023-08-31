import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";

import BasicCard from "../components/BasicCard";
import CustomizedDialogs from "../components/Dialog";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import Search from "../components/Search";

import "../styles/css/users.css";

function Users() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className='users'>
			<Header />
			<h2>Users</h2>
			<div className='search'>
				<Search setSearchTerm={setSearchTerm} flexValue={1} />
				<CustomizedDialogs />
				<Dropdown text='Sort By' />
				<Dropdown text='Saved Search' />
				<Tooltip title='Filters'>
					<IconButton>
						<TuneIcon />
					</IconButton>
				</Tooltip>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
				className='cards'
			>
				<BasicCard />
				<BasicCard />
				<BasicCard />
				<BasicCard />
			</div>
			<ProductTable searchTerm={searchTerm} />
		</div>
	);
}
export default Users;
