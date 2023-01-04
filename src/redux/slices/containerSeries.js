import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerSeries } from '../thunks/series.js';


export const containerSeriesSlice = createSlice({
    name: 'containerSeries',
    initialState: {
        data: [],
        limit: 20,
        message: null,
        page: 1,
        showButton: true,
        status: 'idle',
    },
    reducers: {
        addSeriesPage: (state, action) => {
            state.page = state.page + 1
        },
        getSeries: (state, action) => {
            state.data = action.payload.series
        },
        resetSeriesPage: (state, action) => {
            state.page = 1
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContainerSeries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchContainerSeries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.error
                } else {
                    if (action.payload.page === "1") {
                        state.data = action.payload.series
                    } else {
                        state.data = [...state.data, ...action.payload.series]
                    }
                    state.showButton = action.payload.page * state.limit < action.payload.count 
                }
            })
            .addCase(fetchContainerSeries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { addSeriesPage, getSeries, resetSeriesPage } = containerSeriesSlice.actions

export default containerSeriesSlice.reducer