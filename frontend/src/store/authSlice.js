import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  secureStatus: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    startSecurity: (state) => {
      state.secureStatus = true;
    },
    stopSecurity: (state) => {
      state.secureStatus = false;
    },
  },
});

export const { login, logout, startSecurity, stopSecurity } = authSlice.actions;

export default authSlice.reducer;
