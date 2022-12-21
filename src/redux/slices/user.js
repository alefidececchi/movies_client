import { createSlice } from '@reduxjs/toolkit'

import { getToken, logoutSession, signin } from '../thunks/user.js'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        error: null,
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
        resetMessage: (state, action) => {
            state.message = null
        }
    },
    extraReducers(builder) {
        builder
            //LOGIN SESSION
            .addCase(getToken.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (action.payload.error) {
                    state.message = action.payload.error
                } else {
                    state.user = action.payload.id
                    state.role = action.payload.role
                    state.stateLogin = action.payload.stateLogin
                    state.token = action.payload.token
                }
            })
            .addCase(getToken.rejected, (state, action) => {
                state.message = action.error.error
                state.status = 'failed'
            })
            //LOGOUT SESSION
            .addCase(logoutSession.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(logoutSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if(action.payload.error) {
                    state.message = action.payload.error
                } else {
                    state.role = null;
                    state.stateLogin = action.payload.stateLogin
                    state.token = null;
                    state.user = null;
                }
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
                state.status = 'succeeded';
                if(action.payload.error) {
                    state.message = action.payload.error
                } else{
                    state.message = action.payload.message
                    state.stateSignin = action.payload.stateSignin
                }
            })
            .addCase(signin.rejected, (state, action) => {
                state.error = action.error.error
                state.status = 'failed'
            })
    }
})

export const { resetMessage,resetMessageSignin } = userSlice.actions
export default userSlice.reducer