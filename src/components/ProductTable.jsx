import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { fetchData } from "../utils/api";

import {
	setData,
	setError,
	setPage,
	setRowsPerPage,
} from "../features/productSlice";

export default function ProductTable() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.product.data);
	const loading = useSelector((state) => state.product.loading);
	const error = useSelector((state) => state.product.error);
	const page = useSelector((state) => state.product.page);
	const rowsPerPage = useSelector((state) => state.product.rowsPerPage);
	const searchTerm = useSelector((state) => state.search.searchTerm);

	useEffect(() => {
		fetchData()
			.then((data) => {
				dispatch(setData(data));
			})
			.catch((error) => {
				dispatch(setError(error.message));
			});
	}, [dispatch]);

	const handleChangePage = (newPage) => {
		dispatch(setPage(newPage));
	};

	const handleChangeRowsPerPage = (event) => {
		const srpp = parseInt(event.target.value, 10);
		dispatch(setRowsPerPage(srpp));
		dispatch(setPage(0));
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
