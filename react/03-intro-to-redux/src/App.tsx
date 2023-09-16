import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "./store/UserReducer";

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userid", userIdFromInput);

    setUserId(e.target.value ? Number(e.target.value) : 0);

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );

    if (usersResponse.ok) {
      const users = await usersResponse.json();

      console.log("users", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });

      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.name,
          email: usr.mail,
          city: usr.address.city,
        },
      });
    }
  };

  return (
    <>
      <div className="App">
        <div>
          <label> user id </label>
          <input value={userId} onChange={onChangeUserId} />
        </div>
      </div>
    </>
  );
}

export default App;
