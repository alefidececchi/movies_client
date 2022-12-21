import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerMovies } from '../thunks/movies.js';


export const containerMoviesSlice = createSlice({
    name: 'containerMovies',
    initialState: {
        data: [],
        message: null,
        // singleDetail: null,
        status: 'idle',
    },
    reducers: {
        getMovies: (state, action) => {
            state.data = action.payload.movies
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContainerMovies.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchContainerMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload.error) {
                    state.message = action.payload.message
                } else {
                    state.data = action.payload.movies
                }
            })
            .addCase(fetchContainerMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { getMovies } = containerMoviesSlice.actions
export default containerMoviesSlice.reducer