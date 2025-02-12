import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counter",
  default: 0,
});

export const userDetailsSelector = selector({
  key: "userDetailsSelector",
  get: () => {},
  cachePolicy_UNSTABLE: {
    eviction: "most-recent",
  },
});
