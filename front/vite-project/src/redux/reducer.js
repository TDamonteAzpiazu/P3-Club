import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    userAppointments: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload
        }
    }
})

export const {loginUser, setUserAppointments} = userSlice.actions