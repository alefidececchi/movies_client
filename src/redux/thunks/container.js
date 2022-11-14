import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchContainerMovies = createAsyncThunk('containerMovies/fetchContainerMovies', async (input) => {
    //FETCH DATA
    try {
        const response = !input ? await axios.get(`/movies`) : await axios.get(`/movies?title=${input}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchContainerSeries = createAsyncThunk('containerSeries/fetchContainerSeries', async (input) => {
    try {
        const response = !input ? await axios.get(`/series`) : await axios.get(`/series?title=${input}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})