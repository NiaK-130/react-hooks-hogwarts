import React, { useState } from "react";
import Nav from "./Nav";
import Pigcontainer from "./Pigcontainer";
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(true);

	return (
		<div className="App">
			<Nav showShowGreased = {setShowGreased} />
			<Pigcontainer showGreased = {showGreased} hogs ={hogs}/>
		</div>
	);
}

export default App;
