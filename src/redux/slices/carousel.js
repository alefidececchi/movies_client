import { createSlice } from '@reduxjs/toolkit'
import { fetchCarousel } from '../thunks/carousel.js'


const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {
        getCarousel: (state, action) => {
            state.data = action.payload.carousel
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCarousel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCarousel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                // console.log(action.payload)
                state.data = action.payload.carousel
            })
            .addCase(fetchCarousel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getCarousel } = carouselSlice.actions
export default carouselSlice.reducer