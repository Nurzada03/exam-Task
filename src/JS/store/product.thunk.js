import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../dataService'

export const getProduct = createAsyncThunk(
    'get/product',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getProducts()
            return data.products
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
