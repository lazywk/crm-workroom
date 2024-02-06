import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    signedIn: false,
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload
            console.log("loginSuccess");
        },
        logoutSuccess: (state) => {
            state.signedIn = false
            state.token = ''
            console.log("logoutSuccess");
        }
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions

export default authSlice.reducer