import React from "react";

type GreetingProps = {
	message?: string
}

function Greeting({message}: GreetingProps) {
	// console.log("rendering Greeting");

	return (
		<div>
			{message}
			</div>
	)
}

export default Greeting;
