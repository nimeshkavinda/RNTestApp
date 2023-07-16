import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productService from '../../../api/productService';

type Product = {
  price: number;
  discount: number;
  discount_price: number;
  images: {
    order: number;
    url: string;
  }[];
  code: string;
  shortDescription: string;
  product_code: string;
  search_url: string;
  name: string;
  price_currency: string;
  rate: string;
};

export interface ProductState {
  products: Product[];
  productItem: Product | null;
  getProductsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  getProductItemStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const initialState: ProductState = {
  products: [],
  productItem: null,
  getProductsStatus: 'idle',
  getProductItemStatus: 'idle',
};

export const getProducts = createAsyncThunk(
  'product/getProductList',
  async (page: number) => {
    const res = await productService.getProductList(page);
    return res.data;
  },
);

export const getProductItem = createAsyncThunk(
  'product/getProductById',
  async (id: string) => {
    const res = await productService.getProductById(id);
    return res.data;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.getProductsStatus = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.getProductsStatus = 'succeeded';
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, state => {
        state.getProductsStatus = 'failed';
      })
      .addCase(getProductItem.pending, state => {
        state.getProductItemStatus = 'loading';
      })
      .addCase(getProductItem.fulfilled, (state, action) => {
        state.getProductItemStatus = 'succeeded';
        state.productItem = action.payload;
      })
      .addCase(getProductItem.rejected, state => {
        state.getProductItemStatus = 'failed';
      });
  },
});

export const productActions = {...productSlice.actions};
export const productReducer = productSlice.reducer;

export default productReducer;
