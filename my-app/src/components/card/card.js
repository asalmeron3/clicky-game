import React from "react";
import "./card.css";

const Card = props => (
	<button onClick = {props.func1} id = {props.id}>
		<div className = "cardWrap" id = {props.id}>
			<img alt = {props.name} src = {props.image} id = {props.id}/>
		</div>
	</button>

	);

export default Card;