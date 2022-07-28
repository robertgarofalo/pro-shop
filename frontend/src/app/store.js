import { configureStore } from '@reduxjs/toolkit'
import producReducer from '../features/products/productSlice'

// reducers

export const store = configureStore({
    reducer: {
        products: producReducer
    }
})