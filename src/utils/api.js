import axios from "axios";

const API_BASE_URL = "https://64e8891d99cf45b15fdfba9b.mockapi.io";

export async function fetchData() {
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

export async function fetchUsers() {
	try {
		const response = await axios.get(`${API_BASE_URL}/users`);
		return response.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export async function fetchMessages(userId) {
	try {
		const response = await axios.get(
			`${API_BASE_URL}/users/${userId}/messages`
		);
		return response.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
}
