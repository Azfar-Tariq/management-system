import { Add } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FaxIcon from "@mui/icons-material/Fax";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import WidthFullIcon from "@mui/icons-material/WidthFull";

import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Search from "../components/Search";

import "../styles/css/documents.css";

function Documents() {
	return (
		<div className='documents'>
			<Header />
			<h2>Documents</h2>
			<div className='search'>
				<Search flexValue={1} />
				<Dropdown text='Sort by' />
				<Tooltip title='Filters'>
					<IconButton>
						<TuneIcon />
					</IconButton>
				</Tooltip>
			</div>
			<div className='actions-filters'>
				<div className='actions'>
					<Tooltip title='CNC Machine'>
						<IconButton>
							<FaxIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Fit to Width'>
						<IconButton>
							<WidthFullIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Print'>
						<IconButton>
							<PrintIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Delete'>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</div>
				<div className='filters'>
					<Dropdown text='This Month' />
					<Dropdown text='Documents' />
					<Tooltip title='Add Document'>
						<Button variant='contained'>
							<Add />
						</Button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}

export default Documents;
