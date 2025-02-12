import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
import { User } from "../../type";

const darkModeAtom = atomWithStorage("darkMode", false);

export const userAtom = atom<User | null>(null);
