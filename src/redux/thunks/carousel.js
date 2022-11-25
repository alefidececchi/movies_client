import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const deleteCarousel = createAsyncThunk('carousel/deleteCarousel', async (id) => {

    try {
        const response = await axios.delete(`/carousel/${id}`)
        return response.data
    } catch (error) {
        console.log(error)        
    }
})

export const fetchAllCarousel = createAsyncThunk('carousel/fetchAllCarousel', async () => {
    try {
        const response = await axios.get(`/carousel`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchCarousel = createAsyncThunk('carousel/fetchCarousel', async (type) => {

    try {
        const response = await axios.get(`/carousel?${type}=true`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})