import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./slices/darkSlice";
import cartSlice from "./slices/cartSlice";
export  const store = configureStore({
    reducer:{
        dark:darkSlice,
        cart:cartSlice
    }
})

