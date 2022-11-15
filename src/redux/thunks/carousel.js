import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCarousel = createAsyncThunk('carousel/fetchCarousel', async (type) => {

    try {
        const response = await axios.get(`/carousel?${type}=true`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})