import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import fetchData from "../utils/api";

export default function ProductTable({ searchTerm }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	useEffect(() => {
		fetchData()
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			{error ? (
				<div>Error: {error}</div>
			) : (
				<div>
					{loading ? (
						<CircularProgress />
					) : (
						<TableContainer sx={{ maxHeight: 340 }}>
							<Table stickyHeader aria-label='sticky table'>
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: 30 }}>ID</TableCell>
										<TableCell sx={{ width: 120 }}>Name</TableCell>
										<TableCell sx={{ width: 50 }}>Price ($)</TableCell>
										<TableCell sx={{ width: 80 }}>Category</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data
										.filter((row) =>
											row.title.toLowerCase().includes(searchTerm.toLowerCase())
										)
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map(({ id, title, price, category }) => (
											<TableRow key={id}>
												<TableCell>{id}</TableCell>
												<TableCell>{title}</TableCell>
												<TableCell>{price}</TableCell>
												<TableCell>{category}</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</TableContainer>
					)}
					<TablePagination
						rowsPerPageOptions={[5, 10, 15, 20, { label: "All", value: -1 }]}
						component='div'
						count={data.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</div>
			)}
		</Paper>
	);
}
