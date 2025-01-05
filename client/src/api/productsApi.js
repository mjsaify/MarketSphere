import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constant';

export const ProductsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        GetProductsHome: builder.query({
            query: () => ({
                url: "/products/home",
                method: "GET"
            }),
        }),

        GetProductDetails: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            }),
        }),
    }),
});
export const { useGetProductsHomeQuery, useGetProductDetailsQuery } = ProductsApi;