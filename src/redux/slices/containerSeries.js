import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerSeries } from '../thunks/series.js';


export const containerSeriesSlice = createSlice({
    name: 'containerSeries',
    initialState: {
        data: [],
        message: null,
        // singleDetail: null,
        status: 'idle',
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
                if(action.payload.error) {
                    state.message = action.payload.error
                } else {
                    state.data = action.payload.series
                }
            })
            .addCase(fetchContainerSeries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getSeries } = containerSeriesSlice.actions

export default containerSeriesSlice.reducer