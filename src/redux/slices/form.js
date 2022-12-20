import { createSlice } from "@reduxjs/toolkit";

import { createMovie, deleteMovieId, fetchMovieId, updateMovieId } from "../thunks/movies";
import { createSerie, deleteSerieId, fetchSerieId, updateSerieId } from "../thunks/series";
import { createCarousel, deleteCarouselId, updateCarouselId } from "../thunks/carousel";


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        data: {},
        error: null,
        message: null,
        status: 'idle',
    },
    reducers: {
        cleaningForm: (state, action) => {
            state.data = {}
            state.status = 'succeeded'
        },
        fetchCarouselId: (state, action) => {
            state.data = action.payload.carousel.find(c => c._id === action.payload.id)
            state.status = 'succeeded'
        },
        modifyDeleteArr: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.target]: [...state.data[action.payload.target].slice(0, action.payload.i), ...state.data[action.payload.target].slice(action.payload.i + 1)]
            }
        },
        modifyFilterArr: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.target]: state.data[action.payload.target].filter(o => o !== action.payload.opt)
            }
        },
        modifyPushArr: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.target]: [...state.data[action.payload.target], action.payload.input]
            }
        },
        updateForm: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.target]: action.payload.value
            }
        },
        resetMessage: (state, action) => {
            state.message = null
        },
        createForm: (state, action) => {
            switch (action.payload) {
                case 'movies':
                    state.data = {
                        actors: [],
                        category: [],
                        description: '',
                        director: '',
                        link_img: '',
                        link_img_larger: '',
                        link_trailer: '',
                        release_year: 2000,
                        title: '',
                        type_storage: ''
                    }
                    break;
                case 'series':
                    state.data = {
                        actors: [],
                        category: [],
                        description: '',
                        director: '',
                        link_img: '',
                        link_img_larger: '',
                        link_trailer: '',
                        release_year: 2000,
                        season: 1,
                        title: '',
                        type_storage: ''
                    }
                    break;
                case 'carousel':
                    state.data = {
                        movieOrSerie: '',
                        title: '',
                        desktop_img: '',
                        phone_img: '',
                        tablet_img: '',
                    }
                    break;
                default:
                    break;
            }
            // if (action.payload === 'movies') {
            // } else if 
        }
    },
    extraReducers(builder) {
        builder
            ////////////////////////////////////////////////////
            //                  CREATE MOVIE
            ////////////////////////////////////////////////////
            .addCase(createMovie.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.message = action.payload.message
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            ////////////////////////////////////////////////////
            //                  CREATE SERIE
            ////////////////////////////////////////////////////
            .addCase(createSerie.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createSerie.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(createSerie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            ////////////////////////////////////////////////////
            //                  CREATE CAROUSEL
            ////////////////////////////////////////////////////
            .addCase(createCarousel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createCarousel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(createCarousel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            ////////////////////////////////////////////////////
            //                  FETCH MOVIE ID
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            //                  FETCH SERIE ID
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            //                  UPDATE MOVIE ID
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            //                  UPDATE SERIE ID
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            //                  UPDATE CAROUSEL ID
            ////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////
            //                  DELETE MOVIE ID
            ////////////////////////////////////////////////////
            .addCase(deleteMovieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteMovieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(deleteMovieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            ////////////////////////////////////////////////////
            //                  DELETE SERIE ID
            ////////////////////////////////////////////////////
            .addCase(deleteSerieId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteSerieId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(deleteSerieId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })
            ////////////////////////////////////////////////////
            //                  DELETE CAROUSEL ID
            ////////////////////////////////////////////////////
            .addCase(deleteCarouselId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCarouselId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message
            })
            .addCase(deleteCarouselId.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.payload.error ???????
                state.error = action.error.error
            })

    }
})

export const {
    fetchCarouselId,
    cleaningForm,
    createForm,
    modifyDeleteArr,
    modifyFilterArr,
    modifyPushArr,
    resetMessage,
    updateForm
} = formSlice.actions
export default formSlice.reducer