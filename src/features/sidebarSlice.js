import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState: {
		users: [],
		selectedUser: null,
		messages: [],
		loading: true,
	},
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
			state.loading = false;
		},
		setSelectedUser: (state, action) => {
			state.selectedUser = action.payload;
		},
		setMessages: (state, action) => {
			state.messages = action.payload;
		},
	},
});

export const { setUsers, setSelectedUser, setMessages } = sidebarSlice.actions;
export default sidebarSlice.reducer;
