import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./features/productSlice";
import searchSlice from "./features/searchSlice";
import sidebarSlice from "./features/sidebarSlice";

const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		product: productSlice,
		search: searchSlice,
	},
});

export default store;
