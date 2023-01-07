import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./slices/darkSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
export  const store = configureStore({
    reducer:{
        dark:darkSlice,
        cart:cartSlice,
        user:userSlice
    }
})

