import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const response = await axios('https://fakestoreapi.com/products')
        return response.data;
    }
)


const initialState = {
    products: [],
    isLoading: false,
    error: null,
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        
    }
})

export default productSlice.reducer;


