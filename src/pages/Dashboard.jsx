import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";

import CustomizedDialogs from "../components/Dialog";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import Search from "../components/Search";

import "../styles/css/dashboard.css";

function Dashboard() {
	return (
		<div className='dashboard'>
			<Header />
			<h2>Users Dashboard</h2>
			<div className='search'>
				<Search flexValue={1} />
				<CustomizedDialogs />
				<Dropdown text='Sort By' />
				<Dropdown text='Saved Search' />
				<Tooltip title='Filters'>
					<IconButton>
						<TuneIcon />
					</IconButton>
				</Tooltip>
			</div>
			<ProductTable />
		</div>
	);
}
export default Dashboard;
