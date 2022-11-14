import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerMovies } from '../thunks/container.js';


export const containerMoviesSlice = createSlice({
    name: 'containerMovies',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {
        getMovies: (state, action) => {
            state.data = action.payload.movies
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContainerMovies.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchContainerMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.data = action.payload.movies
            })
            .addCase(fetchContainerMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getMovies } = containerMoviesSlice.actions

export default containerMoviesSlice.reducer