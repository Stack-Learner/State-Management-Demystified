import React from "react";
import { useUserStore } from "./useStore";

export const ZustandDemoString = () => {
  const demoString = useUserStore((state) => state.demoString);
  return <div> DemoString: {demoString}</div>;
};
