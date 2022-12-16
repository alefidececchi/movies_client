import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



export const getToken = createAsyncThunk('token/getToken', async (data) => {
    try {
        const response = await axios.post(`/login`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

