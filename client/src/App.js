import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

import NevBar from "./Nevbar/NevBar";
import Store from "./Storedup/Storedup";
import Dbat from "./components/dBat/Dbat";
import DBalls from "./components/dBalls/DBalls";
import DShoes from "./components/DShoes/DShoes";
import DGloves from "./components/DGloves/DGloves";
import DHelmet from "./components/DHelmet/DHelmet";
import Support from "./components/Support/Support";
import Contactus from "./components/conus/Contactus";



function App() {
	const user = localStorage.getItem("token");

	return (
		<>
		
    <NevBar/>
	
		<Routes>
		{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/store" />} />
			<Route path="/store" exact element={<Store />} />
			<Route path="/dbat" exact element={<Dbat />} />
			<Route path="/dball" exact element={<DBalls />} />
			<Route path="/dshoe" exact element={<DShoes />} />
			<Route path="/dglove" exact element={<DGloves />} />
			<Route path="/dHelmet" exact element={<DHelmet />} />
			<Route path="/support" exact element={<Support />} />
			<Route path="/contact" exact element={<Contactus />} />

		</Routes>
		
		</>
	);
}

export default App;
