import { createSlice } from '@reduxjs/toolkit'

import { getToken, logoutSession, signin } from '../thunks/user.js'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        error: '',
        message: null,
        role: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).role,
        stateLogin: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).stateLogin,
        stateSignin: null,
        status: 'idle',
        token: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).token,
        user: !JSON.parse(window.localStorage.getItem('user')) ? null : (JSON.parse(window.localStorage.getItem('user'))).id,
    },
    reducers: {
        resetMessageSignin: (state, action) => {
            state.message = null;
            state.stateSignin = null;
        },
    },
    extraReducers(builder) {
        builder
            //LOGIN SESSION
            .addCase(getToken.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log(action.payload)
                state.user = action.payload.id
                state.message = action.payload.message
                state.role = action.payload.role
                state.stateLogin = action.payload.stateLogin
                state.token = action.payload.token
            })
            .addCase(getToken.rejected, (state, action) => {
                state.error = action.error.error
                state.status = 'failed'
            })
            //LOGOUT SESSION
            .addCase(logoutSession.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(logoutSession.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.message = action.payload.message
                state.role = null;
                state.stateLogin = action.payload.stateLogin
                state.status = 'succeeded';
                state.token = null;
                state.user = null;
            })
            .addCase(logoutSession.rejected, (state, action) => {
                state.error = action.error.error
                state.status = 'failed'
            })
            //SIGNIN 
            .addCase(signin.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(signin.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.message = action.payload.message
                state.stateSignIn = action.payload.stateSignIn
                state.status = 'succeeded';
            })
            .addCase(signin.rejected, (state, action) => {
                state.error = action.error.error
                state.status = 'failed'
            })
    }
})

export const { resetMessageSignin } = userSlice.actions
export default userSlice.reducer