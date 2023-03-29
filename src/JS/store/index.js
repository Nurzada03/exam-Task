import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './product.Slice'

export const store = configureStore({
    reducer: {
        [productSlice.name]: productSlice.reducer,
    },
})
