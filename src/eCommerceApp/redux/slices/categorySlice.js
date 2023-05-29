import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        const response = await axios('https://fakestoreapi.com/products/categories')
        return response.data;
    }
)

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
    filterCategory: '',

}
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeFilterCategory: (state, action) => {
            state.filterCategory = action.payload;
        }
    },
    extraReducers: (builder) => {

        // getCategories
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})
export const { changeFilterCategory } = categorySlice.actions;
export default categorySlice.reducer;


