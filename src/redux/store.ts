import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import userReducer from "./features/user/userSlice";
import footerReducer from "./features/footer/footerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navbar: navbarReducer,
    footer: footerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
