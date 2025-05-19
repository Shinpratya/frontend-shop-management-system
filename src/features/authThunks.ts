import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../configs/api-client";
// import { ProductType } from "../types";

export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get("/login");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
