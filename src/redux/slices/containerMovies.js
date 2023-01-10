import { createSlice } from '@reduxjs/toolkit';
import { fetchContainerMovies } from '../thunks/movies.js';


export const containerMoviesSlice = createSlice({
    name: 'containerMovies',
    initialState: {
        data: [],
        limit: 5,
        message: null,
        page: 1,
        showButton: true,
        status: 'idle',
    },
    reducers: {
        addPage: (state, action) => {
            state.page = state.page + 1
        },
        getMovies: (state, action) => {
            state.data = action.payload.movies
        },
        resetPage: (state, action) => {
            state.page = 1
        }
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
                    if (action.payload.page === "1") {
                        state.data = action.payload.movies
                    } else {
                        state.data = [...state.data, ...action.payload.movies]
                    }
                    state.showButton = action.payload.page * state.limit < action.payload.count 
                }
            })
            .addCase(fetchContainerMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { addPage, getMovies, resetPage } = containerMoviesSlice.actions
export default containerMoviesSlice.reducer