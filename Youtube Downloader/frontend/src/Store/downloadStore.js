import { configureStore } from "@reduxjs/toolkit";
import downloadSlice from "./downloadSlice";

const store = configureStore(
    {
        reducer: 
        {
            download: downloadSlice.reducer,
        }
    }
);

export default store;