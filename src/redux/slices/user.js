import { createSlice } from '@reduxjs/toolkit'

import { getToken, logoutSession } from '../thunks/user.js'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).id,
        token: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).token,
        error: '',
        status: 'idle',
        message: null,
        stateLogin: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).stateLogin,
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
                // console.log(action.payload)
                state.user = action.payload.id
                state.token = action.payload.token
                state.stateLogin = action.payload.stateLogin
                state.message = action.payload.message
            })
            .addCase(getToken.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
            //LOGOUT SESSION
            .addCase(logoutSession.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(logoutSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log(action.payload)
                state.user = null
                state.token = null
                state.stateLogin = action.payload.stateLogin
                state.message = action.payload.message
            })
            .addCase(logoutSession.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.error
            })
    }
})

export default userSlice.reducer