import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "./useStore";

type ReducerWrapperType = {
  children: React.ReactNode;
};
export const ReduxWrapper: FC<ReducerWrapperType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
