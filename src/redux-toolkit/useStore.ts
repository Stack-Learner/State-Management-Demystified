import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { User } from "../type";

// Define the state type
interface UserState {
  user: User | null;
  demoText: string | null;
}

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    demoText: null,
  } as UserState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    updateDemoText: (state, action: PayloadAction<string>) => {
      state.demoText = action.payload;
    },
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Export actions
export const { logIn, logOut, updateDemoText } = userSlice.actions;

// Infer RootState and AppDispatch types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export typed versions of hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
