import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



export const getToken = createAsyncThunk('user/getToken', async (data) => {
    try {
        const response = await axios.post(`/login`, data)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const logoutSession = createAsyncThunk('user/logoutSession', async ({ id, token }) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.put(`/logout/${id}`, undefined, { headers })
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

export const signin = createAsyncThunk('user/signin', async (data) => {
    try {
        console.log(data)
        const response = await axios.post(`/signin?clasic=true`, data)
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})

