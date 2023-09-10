import React from "react";

type GreetingProps = {
	message?: string;
	enteredName: string;
	greetingDispatcher: React.Dispatch<{
		type: string,
		payload: string
	}>
}

function Greeting({ message , enteredName, greetingDispatcher}: GreetingProps) {
	// console.log("rendering Greeting");

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		greetingDispatcher({
			type: "enteredName",
			payload: e.target.value
		})

		greetingDispatcher({
			type: "message",
			payload: e.target.value
		})
	}

	return (
		<div>
			<input
				value={enteredName}
				onChange={onChangeName}
				/>		
			<div>{message}</div>
			</div>
	)
}

export default Greeting;
