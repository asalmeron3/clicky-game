 import React from "react";
 import "./titlebar.css";

 const Titlebar = prop => (
	<nav className = "navbar-default">
		<div className = "container-fluid">
			<div className = "navbar-header">
				{prop.message}
			</div>
		</div>
	</nav>	 
 );

 export default Titlebar;