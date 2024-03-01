import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: {
        searchQuery: '',
        books: []
    }
}

export const searchSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action)=>{
            state.books = action.payload
        }
    }
})

export const {setBooks} = searchSlice.actions;
export default searchSlice.reducer;