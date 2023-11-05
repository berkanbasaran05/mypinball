import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FooterState {
  isVisible: boolean;
}
const initialState: FooterState = {
  isVisible: true,
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setIsVisible: (state: FooterState, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsVisible } = footerSlice.actions;

export default footerSlice.reducer;
