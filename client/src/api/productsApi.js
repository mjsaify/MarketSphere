import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constant';

export const ProductsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        GetProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET"
            }),
        }),
    }),
});

export const { useGetProductsQuery } = ProductsApi;