import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export type RoleType = "USER" | "ADMIN" | "BRAND_OWNER";

export interface UserState {
  isLogged: boolean;
}

export interface UserInfo {
  sub?: number;
  id?: number;
  role?: RoleType;
  email?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
}

const initialState: UserState & UserInfo = {
  isLogged: cookies.get("accessToken", {}) ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogged: (
      state: typeof initialState,
      action: PayloadAction<boolean>
    ) => {
      state.isLogged = action.payload;
    },
    setOther: (state: typeof initialState, action: PayloadAction<UserInfo>) => {
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.sub = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogged, setOther } = userSlice.actions;

export default userSlice.reducer;
