import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		error: null,
		page: 0,
		rowsPerPage: 10,
		anchorEl: null,
		open: false,
		loading: true,
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
		setRowsPerPage: (state, action) => {
			state.rowsPerPage = action.payload;
		},
		setAnchorEl: (state, action) => {
			state.anchorEl = action.payload;
		},
		setOpen: (state, action) => {
			state.open = action.payload;
		},
	},
});

export const {
	setData,
	setError,
	setPage,
	setRowsPerPage,
	setAnchorEl,
	setOpen,
} = productSlice.actions;
export default productSlice.reducer;
