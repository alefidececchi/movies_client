import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {

    try {
        const response = await axios.get('/category')
        return response.data
    } catch (error) {
        return ({ error: error.response.data.message, status: error.response.status })
    }
})