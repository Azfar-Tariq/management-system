import React, { useState } from "react";
import "../styles/css/dashboard.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import TuneIcon from "@mui/icons-material/Tune";
import { IconButton, Tooltip } from "@mui/material";
import CustomizedDialogs from "../components/Dialog";
import BasicCard from "../components/BasicCard";
import ProductTable from "../components/ProductTable";
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
				<Dropdown text='Saved Search' b='ashfijsa' />
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
