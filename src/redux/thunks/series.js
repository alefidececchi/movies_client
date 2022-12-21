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

export const fetchContainerSeries = createAsyncThunk('containerSeries/fetchContainerSeries', async (input) => {
    try {
        const response = !input ? await axios.get(`/series`) : await axios.get(`/series?title=${input}`)
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