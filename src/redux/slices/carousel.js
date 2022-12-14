import { createSlice } from '@reduxjs/toolkit'
import { fetchAllCarousel, fetchCarousel } from '../thunks/carousel.js'


const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        allData: [],
        data: [],
        error: null,
        message: null,
        status: 'idle',
    },
    reducers: {
        getCarousel: (state, action) => {
            state.data = action.payload.carousel
        }
    },
    extraReducers(builder) {
        builder
            //FETCH CAROUSEL
            .addCase(fetchCarousel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCarousel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.error
                } else {
                    state.data = action.payload.carousel
                }
            })
            .addCase(fetchCarousel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            //FETCH ALL CAROUSEL
            .addCase(fetchAllCarousel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllCarousel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.error
                } else {
                    state.allData = action.payload.carousel
                }
            })
            .addCase(fetchAllCarousel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getCarousel } = carouselSlice.actions
export default carouselSlice.reducer