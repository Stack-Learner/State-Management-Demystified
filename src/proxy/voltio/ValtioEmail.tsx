import React from "react";
import { useSnapshot } from "valtio";
import { userState } from "./useStore";

export const ValtioEmail = () => {
  const { user } = useSnapshot(userState);
  return <div>Email: {user?.email}</div>;
};
