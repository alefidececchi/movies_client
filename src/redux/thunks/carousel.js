import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCarousel = createAsyncThunk('carousel/fetchCarousel', async (type) => {

    try {
        if (type === "movies") {
        const response = await axios.get('/carousel?movie=true')
        return response.data
        } else if (type === "series") {
            const response = await axios.get('/carousel?serie=true')
            return response.data
        }
    } catch (error) {
        console.log(error)
    }

})