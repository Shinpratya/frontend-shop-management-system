import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authLogin } from "../../features";

export type authType = {
  token: string | null;
  loading: boolean;
  error: string | null;
  role: string | null;
};

const initialState: authType = {
  token: null,
  loading: false,
  error: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    login: (state) => {
      state.token = "test";
      state.role = "admin";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, login } = authSlice.actions;
export const authSelector = (store: RootState) => store.authSlice;
export default authSlice.reducer;
