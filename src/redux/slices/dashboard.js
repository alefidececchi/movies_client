import { createSlice } from "@reduxjs/toolkit";

import { fetchDashboardMovies } from '../thunks/movies.js'
import { fetchDashboardSeries } from '../thunks/series.js'


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        count: null,
        data: [],
        error: '',
        limit: 5,
        message: null,
        page: 1,
        status: 'idle'
    },
    reducers: {
        cleaningData: (state, action) => {
            state.data = []
        },
        changePage: (state, action) => {
            state.page = action.payload
        },
        resetPage: (state, action) => {
            state.page = 1
        }
    },
    extraReducers(builder) {
        builder
            //MOVIES
            .addCase(fetchDashboardMovies.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDashboardMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.message
                } else {
                    state.data = action.payload.movies
                    state.count = action.payload.movies.length
                    state.page = 1
                }
            })
            .addCase(fetchDashboardMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //SERIES
            .addCase(fetchDashboardSeries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDashboardSeries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.message
                } else {
                    state.data = action.payload.series
                    state.count = action.payload.series.length
                    state.page = 1
                }
            })
            .addCase(fetchDashboardSeries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { changePage, cleaningData, resetPage } = dashboardSlice.actions
export default dashboardSlice.reducer