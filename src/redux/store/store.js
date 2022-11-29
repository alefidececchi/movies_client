import { configureStore } from '@reduxjs/toolkit'
import containerMoviesSlice from '../slices/containerMovies.js'
import containerSeriesSlice from '../slices/containerSeries.js'
import carouselSlice from '../slices/carousel.js'
import formSlice from '../slices/form.js'


export default configureStore({
    reducer: {
        containerMovies: containerMoviesSlice,
        containerSeries: containerSeriesSlice,
        carousel: carouselSlice,
        form: formSlice
    }
})