import { configureStore } from '@reduxjs/toolkit'
import containerMoviesSlice from '../slices/containerMovies.js'
import containerSeriesSlice from '../slices/containerSeries.js'
import carousel from '../slices/carousel.js'


export default configureStore({
    reducer: {
        containerMovies: containerMoviesSlice,
        containerSeries: containerSeriesSlice,
        carousel: carousel
    }
})