import { createSlice } from "@reduxjs/toolkit";

import { deleteMovieId, fetchMovieId, updateMovieId } from "../thunks/movies";
import { deleteSerieId, fetchSerieId, updateSerieId } from "../thunks/series";
import { deleteCarouselId, updateCarouselId } from "../thunks/carousel";


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        data: {},
        dashboardMessage: '',
        error: null,
        message: '',
        status: 'idle',
    },
    reducers: {
        cleaningForm: (state, action) => {
            state.data = {}
            state.status = 'succeeded'
        },
        carouselIdForm: (state, action) => {
            state.data = action.payload.carousel.find(c => c._id === action.payload.id)
            state.status = 'succeeded'
        },
        updateForm: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.target]: action.payload.value
            }
        }
    },
    extraReducers(builder) {
        builder
            //FETCH MOVIE ID
            .addCase(fetchMovieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchMovieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.movie
            })
            .addCase(fetchMovieId.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            //FETCH SERIE ID
            .addCase(fetchSerieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchSerieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.serie
            })
            .addCase(fetchSerieId.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            //UPDATE MOVIE ID
            .addCase(updateMovieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateMovieId.fulfilled, (state, action) => {
                console.log('deberia actualizarse la peli')
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(updateMovieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            //UPDATE SERIE ID
            .addCase(updateSerieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateSerieId.fulfilled, (state, action) => {
                console.log('deberia actualizarse la serie')
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(updateSerieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            //UPDATE CAROUSEL ID
            .addCase(updateCarouselId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateCarouselId.fulfilled, (state, action) => {
                console.log('deberia actualizarse el carousel')
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(updateCarouselId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            //DELETE MOVIE ID
            .addCase(deleteMovieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteMovieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dashboardMessage = action.payload.message
            })
            .addCase(deleteMovieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            //DELETE SERIE ID
            .addCase(deleteSerieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteSerieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dashboardMessage = action.payload.message
            })
            .addCase(deleteSerieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            //DELETE CAROUSEL ID
            .addCase(deleteCarouselId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCarouselId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dashboardMessage = action.payload.message
            })
            .addCase(deleteCarouselId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })

    }
})

export const { carouselIdForm, cleaningForm, updateForm } = formSlice.actions
export default formSlice.reducer