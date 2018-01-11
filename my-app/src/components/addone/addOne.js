import React from "react";

// var highScore = 0;
// var currentScore = 0;

const addOne = prop => (
	<div className = "main-container">
		<div className = "container">
			<div className = "jumbotron"> 
				<h1> {prop.message}</h1>
				<h3> Your Current Score:  {prop.currentCount} ||   Highest Score:  {prop.highScore} </h3>
			</div>
		</div>
	</div>
);

export default addOne;