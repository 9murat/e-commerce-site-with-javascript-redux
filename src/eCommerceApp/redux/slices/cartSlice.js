import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = {
    carts: [],
    totalPrice: 0,
    itemCount: 0,
    favoriteItems: [],
    confirmCarts: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const existingProductIndex = state.carts.findIndex(
                (item) => item.id === product.id
            );
            if (existingProductIndex !== -1) {
                const existingProduct = state.carts[existingProductIndex];
                existingProduct.quantity += 1;
            } else {
                const newProduct = { ...product, quantity: 1 };
                state.carts.push(newProduct);
            }
            state.totalPrice += product.price;
            state.itemCount = state.carts.reduce((count, item) => count + item.quantity, 0);

        },
        removeFromCart: (state, action) => {
            const { product } = action.payload;
            const newcart = state.carts.filter(item => item.id !== product.id);
            state.carts = newcart;
            const removedPrice = product.price * product.quantity;
            state.totalPrice -= removedPrice;
            state.itemCount -= product.quantity;
        },


        decrementAmount: (state, action) => {
            const { productId } = action.payload;
            const removedProductIndex = state.carts.findIndex(item => item.id === productId);
            if (removedProductIndex !== -1) { // ürün sepette varsa 
                const removedProduct = state.carts[removedProductIndex];
                if (removedProduct.quantity > 1) {
                    removedProduct.quantity -= 1;
                    state.totalPrice -= removedProduct.price;
                }
                else {
                    state.carts.splice(removedProductIndex, 1);
                    state.totalPrice -= removedProduct.price;
                }
                state.itemCount -= 1;
            }
        },

        addToFavorites: (state, action) => {
            const { product } = action.payload;
            const existingProductIndex = state.favoriteItems.findIndex(
                (item) => item.id === product.id
            );
            if (existingProductIndex !== -1) {
                alert('This product already is in favorites')
            } else {
                const newProduct = { ...product, quantity: 1 };
                state.favoriteItems.push(newProduct);

            }
        },

        removeFromFavorites: (state, action) => {
            const newFavorite = state.favoriteItems.filter(item => item.id !== action.payload.id);
            state.favoriteItems = newFavorite;
        },
        confirmProducts: (state, action) => {
            state.confirmCarts.push(action.payload);
            alert('Sepet Onaylandı')
        },
        removeAllCart: (state) => {
            state.carts = [];
            state.itemCount = 0;
            state.totalPrice = 0;
        }
    },
})
const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: [],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export const { addToCart, decrementAmount, removeFromCart, addToFavorites, confirmProducts, removeAllCart, removeFromFavorites } =
    cartSlice.actions;
export default persistedCartReducer;



