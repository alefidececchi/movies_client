import { createSlice } from '@reduxjs/toolkit'

import { getToken } from '../thunks/token.js'


const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        user: !JSON.parse(window.sessionStorage.getItem('user')) ? null : JSON.parse(window.sessionStorage.getItem('user')).id,
        data: !JSON.parse(window.sessionStorage.getItem('user')) ? null : JSON.parse(window.sessionStorage.getItem('user')).token,
        error: '',
        status: 'idle',
        message: '',
        stateLogin: !JSON.parse(window.sessionStorage.getItem('user')) ? false : JSON.parse(window.sessionStorage.getItem('user')).stateLogin,
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getToken.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.user = action.payload.id
                state.data = action.payload.token
                state.stateLogin = action.payload.stateLogin
                state.message = action.payload.message
            })
            .addCase(getToken.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
    }
})

export default tokenSlice.reducer