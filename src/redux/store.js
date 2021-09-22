import {newsSlice} from "./slice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: newsSlice.reducer,
});



