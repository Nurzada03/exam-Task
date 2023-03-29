import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from './product.thunk'

const initialState = {
    products: [],
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        decrement: (state, action) => {
            const itemIndex = state.products?.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const newItem = {
                        ...cartItem,
                        total: cartItem.total + cartItem.price,
                        orderedQuantity: cartItem.orderedQuantity + 1,
                    }
                    return newItem
                }
                return cartItem
            })
            state.products = itemIndex
        },
        increment: (state, action) => {
            const itemIndex = state.products?.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const newItem = {
                        ...cartItem,
                        total: cartItem.total - cartItem.price,
                        orderedQuantity: cartItem.orderedQuantity - 1,
                    }
                    return newItem
                }
                return cartItem
            })
            state.products = itemIndex
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload.map((item) => {
                return { ...item, orderedQuantity: 0, total: 0 }
            })
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.products = []
            state.error = action.payload
        })
    },
})

export const { decrement, increment } = productSlice.actions
