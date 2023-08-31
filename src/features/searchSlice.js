import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "sidebar",
	initialState: {
		searchTerm: "",
	},
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
