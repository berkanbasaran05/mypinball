import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavbarState {
  isOpen: boolean;
}
const initialState: NavbarState = {
  isOpen:
    typeof window !== 'undefined' && window.innerWidth < 1024 ? false : true
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsOpen: (state: NavbarState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setIsOpen } = navbarSlice.actions;

export default navbarSlice.reducer;
