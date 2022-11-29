import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchContainerSeries = createAsyncThunk('containerSeries/fetchContainerSeries', async (input) => {
    try {
        const response = !input ? await axios.get(`/series`) : await axios.get(`/series?title=${input}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchSerieId = createAsyncThunk('form/fetchSerieId', async (id) => {

    try {
        const response = await axios.get(`/series/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const updateSerieId = createAsyncThunk('form/updateSerieId', async ({id, payload}) => {

    try {
        const response = await axios.put(`/series/update/${id}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteSerieId = createAsyncThunk('form/deleteSerieId', async (id) => {
    try {
        const response = await axios.delete(`/series/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})