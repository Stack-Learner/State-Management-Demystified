import { User } from "../type";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  user: User | null;
  demoString: string | null;
};

type Actions = {
  logIn: (user: User) => void;
  logOut: () => void;
  updateDemoString: (demoString: string) => void;
};

type ComposeStateType = Store & Actions;

export const useUserStore = create<ComposeStateType>((set) => ({
  user: null,
  demoString: null,
  logIn: (user: User) => {
    set({ user });
  },

  logOut: () => {
    set({ user: null });
  },
  updateDemoString: (demoString: string) => {
    set((state) => ({ ...state, demoString }));
  },
}));

export const useUserStore2 = create(
  persist(
    immer<ComposeStateType>((set) => ({
      user: null,
      demoString: null,
      logIn: (user: User) => {
        set((state) => {
          state.user = user;
        });
      },

      logOut: () => {
        //   set({ user: null });
        set((state) => {
          state.user = null;
        });
      },
      updateDemoString: (demoString: string) => {
        // set((state) => {});
        set((state) => {
          state.demoString = demoString;
        });
      },
    })),

    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
