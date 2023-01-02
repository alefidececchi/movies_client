import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const createMovie = createAsyncThunk('form/createMovie', async ({ payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.post(`/movies`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchContainerMovies = createAsyncThunk('containerMovies/fetchContainerMovies', async (input) => {
    //FETCH DATA
    try {
        const response = !input ? await axios.get(`/movies`) : await axios.get(`/movies?title=${input}`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchDashboardMovies = createAsyncThunk('dashboard/fetchDashboardMovies', async () => {
    //FETCH DATA
    try {
        const response = await axios.get(`/movies/dashboard`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const fetchMoviesFiltered = createAsyncThunk('containerMovies/fetchMoviesFiltered', async (categories) => {

    try {
        console.log('Categorias front',categories)
        const response = await axios.get(`/movies?categories=${categories}`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }

})

export const fetchMovieId = createAsyncThunk('form/fetchMovieId', async (id) => {

    try {
        const response = await axios.get(`/movies/${id}`)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const updateMovieId = createAsyncThunk('form/updateMovieId', async ({ id, payload, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.put(`/movies/${id}`, payload, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const deleteMovieId = createAsyncThunk('form/deleteMovieId', async ({ id, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.delete(`/movies/${id}`, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})
