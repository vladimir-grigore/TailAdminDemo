import { BrowserRouter as Router, Routes, Route } from "react-router";
import PortalSignIn from "./pages/AuthPages/PortalSignIn";
import PortalSignUp from "./pages/AuthPages/PortalSignUp";

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* Add your routes here */}
					<Route path="/" element={<PortalSignIn />} />
					<Route path="/signup" element={<PortalSignUp />} />
					{/* Add more routes as needed */}
				</Routes>
			</Router>
		</>
	);
}

