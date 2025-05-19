import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductType } from "../../types";
import { getProducts, addProducts, getProductById } from "../../features";

export type ProductSilecType = {
  data: ProductType[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductSilecType = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
          //GetProduct
          .addCase(getProducts.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload as string;
          })

          //getById
          .addCase(getProductById.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getProductById.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(getProductById.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload as string;
          })

          // AddProduct
          .addCase(addProducts.fulfilled, (state, action) => {
              state.data.push(action.payload); // เพิ่มเข้า list
          })
          .addCase(addProducts.pending, (state) => {
              state.loading = true;
              state.error = null;
          }).addCase(addProducts.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload as string;
          });
  },
});

export const {} = productSlice.actions;
export const productSelector = (store: RootState) => store.productSlice;
export default productSlice.reducer;
