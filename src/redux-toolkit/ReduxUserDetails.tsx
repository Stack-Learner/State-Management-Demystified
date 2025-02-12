import React from "react";
import { logIn, logOut, useAppDispatch, useAppSelector } from "./useStore";

export const ReduxUserDetails = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userData = await response.json();
    dispatch(logIn(userData));
  };
  return (
    <div>
      {JSON.stringify(user, null, 2)}
      <button onClick={handleLogin}>Log In</button>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};
