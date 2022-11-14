import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerSeries } from '../thunks/container.js';


export const containerSeriesSlice = createSlice({
    name: 'containerSeries',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {
        getSeries: (state, action) => {
            state.data = action.payload.series
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContainerSeries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchContainerSeries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.data = action.payload.series
            })
            .addCase(fetchContainerSeries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getSeries } = containerSeriesSlice.actions

export default containerSeriesSlice.reducer