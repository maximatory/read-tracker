import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import { booksApi } from "./services/booksApi";


export const store = configureStore({
    reducer: {
        search: searchSlice,
        [booksApi.reducerPath]: booksApi.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware)
})