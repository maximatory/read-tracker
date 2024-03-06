import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import { booksApi } from "./services/booksApi";
import {libraryApi} from "./services/libraryApi";


export const store = configureStore({
    reducer: {
        search: searchSlice,
        [booksApi.reducerPath]: booksApi.reducer,
        [libraryApi.reducerPath]: libraryApi.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware).concat(libraryApi.middleware)
})