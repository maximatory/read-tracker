import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_LIBRARY_API_URL;

export const libraryApi = createApi({
    reducerPath: 'libraryApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Library'],
    endpoints: (builder) => ({
        getLibrary: builder.query({
            query: () => {
                return {
                    url: '/library',
                }
            },
            providesTags: ['Library']
        }),
        setBookToLibrary: builder.mutation({
            query: (bookCard) => ({
                url: '/library',
                method: 'POST',
                body: bookCard
            }),
            invalidatesTags: ['Library']
        }),
        editBookLibrary: builder.mutation({
            query: (bookCard) => ({
                url: `/library/${bookCard.id}`,
                method: 'PUT',
                body: bookCard
            }),
            invalidatesTags: ['Library']
        }),
        deleteBookLibrary: builder.mutation({
            query: (id) => ({
                url: `/library/${id}`,
                method: 'DELETE',
            })
        }),
        invalidatesTags: ['Library']
    }),
})

export const { 
    useGetLibraryQuery, 
    useSetBookToLibraryMutation, 
    useEditBookLibraryMutation,
    useDeleteBookLibraryMutation 
} = libraryApi;
