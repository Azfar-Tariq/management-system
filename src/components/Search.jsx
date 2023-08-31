import { useDispatch } from "react-redux";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

import { setSearchTerm } from "../features/searchSlice";

export default function CustomizedInputBase({ flexValue }) {
	const dispatch = useDispatch();
	const handleSearchChange = (event) => {
		dispatch(setSearchTerm(event.target.value));
	};
	return (
		<Paper
			component='form'
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				flex: flexValue,
			}}
		>
			<IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
				inputProps={{ "aria-label": "search" }}
				onChange={handleSearchChange}
			/>
		</Paper>
	);
}
