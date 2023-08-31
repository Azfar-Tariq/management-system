import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import ErrorPage from "./pages/ErrorPage";
import Message from "./pages/Message";
import NavBar from "./components/NavBar";
import Users from "./pages/Users";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/documents' element={<Documents />} />
				<Route path='/users' element={<Users />} />
				<Route path='/message' element={<Message />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
