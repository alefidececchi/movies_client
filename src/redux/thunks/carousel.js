import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createCarousel = createAsyncThunk('form/createCarousel', async (data) => {
    try {
        const response = await axios.post(`/carousel/create`, data)
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

export const updateCarouselId = createAsyncThunk('form/updateCarouselId', async ({id, payload}) => {
    
    try {
        const response = await axios.put(`/carousel/update/${id}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteCarouselId = createAsyncThunk('form/deleteCarouselId', async (id) => {

    try {
        const response = await axios.delete(`/carousel/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})