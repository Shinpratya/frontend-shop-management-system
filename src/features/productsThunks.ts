import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../configs/api-client";
import { ProductType } from "../types";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id:number, thunkAPI) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);

export const addProducts = createAsyncThunk(
  'products/addProducts',
  async (newProduct: ProductType, thunkAPI) => {
    try {
      const response = await apiClient.post('/products',newProduct);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);