import React from "react";
import { useSnapshot } from "valtio";
import { updateAuthUser, updateUserName, userState } from "./useStore";

export const ValtiouserDetails = () => {
  const { user } = useSnapshot(userState);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button
        onClick={() => {
          updateAuthUser(
            {
              id: 1,
              name: "John Doe",
              email: "john@doe.com",
            },
            "login"
          );
        }}
      >
        Log In
      </button>

      <button onClick={() => updateAuthUser({}, "logout")}>Log Out</button>

      <br />
      <br />
      <button onClick={() => updateUserName("Hello world" + Math.random())}>
        Update User name
      </button>
    </div>
  );
};
