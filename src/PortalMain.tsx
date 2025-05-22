import { BrowserRouter as Router, Routes, Route } from "react-router";
import PortalSignIn from "./pages/AuthPages/PortalSignIn";
import SignUp from "./pages/AuthPages/SignUp";

export default function App() {
	return (
		// <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		// 	<h1 className="text-2xl font-bold mb-4">Offers Admin</h1>
		// </div>
		<>
			<Router>
				<Routes>
					{/* Add your routes here */}
					<Route path="/" element={<PortalSignIn />} />
					<Route path="/signup" element={<SignUp />} />
					{/* Add more routes as needed */}
				</Routes>
			</Router>
		</>
	);
}

