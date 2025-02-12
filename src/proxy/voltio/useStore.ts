import { User } from "../../type";

import { proxy } from "valtio";

type UserState = {
  user: User | null;
};

export const userState = proxy<UserState>({
  user: null,
});

export const updateAuthUser = (payload: User, type: "login" | "logout") => {
  switch (type) {
    case "login": {
      userState.user = payload;
      break;
    }
    case "logout": {
      userState.user = null;
      break;
    }
    default:
      break;
  }
};

export const updateUserName = (userName: string) => {
  if (!userState.user) return;
  userState.user.name = userName;
};
