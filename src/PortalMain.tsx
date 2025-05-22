import { BrowserRouter as Router, Routes, Route } from "react-router";
import PortalSignIn from "./pages/AuthPages/PortalSignIn";
import PortalSignUp from "./pages/AuthPages/PortalSignUp";
import PortalRecoverPassword from "./pages/AuthPages/PortalRecoverPassword";

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* Add your routes here */}
					<Route path="/" element={<PortalSignIn />} />
					<Route path="/signup" element={<PortalSignUp />} />
					<Route path="/password-recovery" element={<PortalRecoverPassword />} />
					{/* Add more routes as needed */}
				</Routes>
			</Router>
		</>
	);
}

