import { createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from '../thunks/categories.js'


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        error: '',
        status: 'idle',
    },
    extraReducers(builder) {
        builder
            //FETCH CATEGORIES
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.error = action.payload.error
                } else {
                    state.data = action.payload.categories
                }
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default categoriesSlice.reducer