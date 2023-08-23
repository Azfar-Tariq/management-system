import axios from "axios";

export default async function fetchData() {
	try {
		const response = await axios.get("https://dummyjson.com/products");
		const data = await response.data;
		// data is present as an object, so convert it to array
		return Array.isArray(data) ? data : data.products || [];
	} catch (err) {
		console.error(err);
		throw err;
	}
}
