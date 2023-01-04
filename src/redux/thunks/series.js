import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const createSerie = createAsyncThunk('form/createSerie', async ({ payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.post(`/series`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchContainerSeries = createAsyncThunk('containerSeries/fetchContainerSeries', async ({ categories, input, page, limit }) => {
    try {
        console.log('VALORES EN DISPATCH', { categories, input, page, limit })
        const response = categories
            ? await axios.get(`/series?categories=${categories}&page=${page}&limit=${limit}`)
            : input
                ? await axios.get(`/series?title=${input}&page=${page}&limit=${limit}`)
                : await axios.get(`/series?page=${page}&limit=${limit}`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchDashboardSeries = createAsyncThunk('dashboard/fetchDashboardSeries', async (input) => {
    //FETCH DATA
    try {
        let response;
        if (input) {
            response = await axios.get(`/series/dashboard?title=${input}`)
        } else {
            response = await axios.get(`/series/dashboard`)
        }
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchSerieId = createAsyncThunk('form/fetchSerieId', async (id) => {

    try {
        const response = await axios.get(`/series/${id}`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const updateSerieId = createAsyncThunk('form/updateSerieId', async ({ id, payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.put(`/series/${id}`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const deleteSerieId = createAsyncThunk('form/deleteSerieId', async ({ id, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.delete(`/series/${id}`, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})