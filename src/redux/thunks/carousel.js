import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


//CREATE
export const createCarousel = createAsyncThunk('form/createCarousel', async ({ payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.post(`/carousel`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

//FETCH
export const fetchAllCarousel = createAsyncThunk('carousel/fetchAllCarousel', async () => {
    try {
        const response = await axios.get(`/carousel`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

//FETCH
export const fetchCarousel = createAsyncThunk('carousel/fetchCarousel', async (type) => {

    try {
        const response = await axios.get(`/carousel?${type}=true`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

//UPDATE
export const updateCarouselId = createAsyncThunk('form/updateCarouselId', async ({ id, payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.put(`/carousel/${id}`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

//DELETE
export const deleteCarouselId = createAsyncThunk('form/deleteCarouselId', async ({ id, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.delete(`/carousel/${id}`, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})