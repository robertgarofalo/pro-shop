import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  products: [],
  product: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// // Create new goal
// export const createGoal = createAsyncThunk(
//   'goals/create',
//   async (goalData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.createGoal(goalData, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Get user goals
export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
    //   const token = thunkAPI.getState().auth.user.token
    //   return await goalService.getGoals(token)
      return await productService.getProducts()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// getSingleProduct
export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (ID, thunkAPI) => {
    try {
    //   const token = thunkAPI.getState().auth.user.token
    //   return await goalService.getGoals(token)
      return await productService.getSingleProduct(ID)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete user goal
// export const deleteGoal = createAsyncThunk(
//   'goals/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.deleteGoal(id, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(createGoal.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(createGoal.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.goals.push(action.payload)
    //   })
    //   .addCase(createGoal.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.product = action.payload
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(deleteGoal.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(deleteGoal.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.goals = state.goals.filter(
    //       (goal) => goal._id !== action.payload.id
    //     )
    //   })
    //   .addCase(deleteGoal.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer
