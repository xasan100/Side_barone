/** @format */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sidebar } from './Components/Sidebar/Sidebar';
// import { SideMene } from './Components/Func/funck.jsx';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
<div>
			{/* <SideMene/> */}
			<Sidebar/>
</div>
	</React.StrictMode>
);
