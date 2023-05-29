import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import userSlice from "../slices/userSlice";
import categorySlice from "../slices/categorySlice";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        user: userSlice,
        category: categorySlice,


    }
})

const persistor = persistStore(store);
export { store, persistor };