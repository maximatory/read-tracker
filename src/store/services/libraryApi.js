import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_LIBRARY_API_URL;

export const libraryApi = createApi({
    reducerPath: 'libraryApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getLibrary: builder.query({
            query: () => {
                return {
                    url: '/library',
                }
            },
        }),
        setBookToLibrary: builder.mutation({
            query: (bookCard) => ({
                url: '/library',
                method: 'POST',
                body: bookCard
              })
        })
    }),
})

export const {useGetLibraryQuery, useSetBookToLibraryMutation} = libraryApi;
