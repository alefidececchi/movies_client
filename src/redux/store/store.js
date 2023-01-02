import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../slices/categories.js'
import containerMoviesSlice from '../slices/containerMovies.js'
import containerSeriesSlice from '../slices/containerSeries.js'
import carouselSlice from '../slices/carousel.js'
import dashboardSlice from '../slices/dashboard.js'
import formSlice from '../slices/form.js'
import userSlice from '../slices/user.js'


export default configureStore({
    reducer: {
        categories: categoriesSlice,
        containerMovies: containerMoviesSlice,
        containerSeries: containerSeriesSlice,
        carousel: carouselSlice,
        dashboard: dashboardSlice,
        form: formSlice,
        user: userSlice,
    }
})