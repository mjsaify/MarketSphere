import { configureStore } from '@reduxjs/toolkit';
import { ProductsApi } from '../api/productsApi';

export const store = configureStore({
    reducer: {
        [ProductsApi.reducerPath]: ProductsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ProductsApi.middleware);
    },
});