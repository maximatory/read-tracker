import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (searchQuery) => {
        return {
            url: BASE_URL,
            params: {
                q: searchQuery,
                key: API_KEY,
                maxResults: '40'
            },
            searchQuery
        }
      },
    }),
    getBookById: builder.query({
        query: (id)=> {
            return {
                url: `${BASE_URL}/${id}`,
                params: {
                    key: API_KEY
                }
            }
        }
    })
  }),
})


export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi