import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { userAtom } from "./userAtoms";

export const JotaiUserDetails = () => {
  // const [user, setuser] = useAtom(userAtom);
  const user = useAtomValue(userAtom);
  const setuser = useSetAtom(userAtom);

  const updateuserHandler = () => {
    setuser({ id: 1, name: "rasel", email: "exmaple@example.com" });
  };
  return (
    <div>
      user: {JSON.stringify(user, null, 2)}
      <br />
      <button onClick={updateuserHandler}> Update User</button>
    </div>
  );
};
