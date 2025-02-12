import React from "react";
import { useRecoilValue } from "recoil";
import { counterAtom } from "./useCounter";
export const UserDetails = () => {
  const counter = useRecoilValue(counterAtom);
  return <div>{counter}</div>;
};
