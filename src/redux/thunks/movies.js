import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createMovie = createAsyncThunk('form/createMovie', async (data) => {
    try {
        const response = await axios.post(`/movies`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchContainerMovies = createAsyncThunk('containerMovies/fetchContainerMovies', async (input) => {
    //FETCH DATA
    try {
        const response = !input ? await axios.get(`/movies`) : await axios.get(`/movies?title=${input}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchMovieId = createAsyncThunk('form/fetchMovieId', async (id) => {

    try {
        const response = await axios.get(`/movies/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const updateMovieId = createAsyncThunk('form/updateMovieId', async ({id,payload}) => {
    try {
        console.log('ID: ', id)
        console.log('payload: ',payload)
        const response = await axios.put(`/movies/${id}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteMovieId = createAsyncThunk('form/deleteMovieId', async (id) => {
    try {
        const response = await axios.delete(`/movies/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})
