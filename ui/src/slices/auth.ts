import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    authState: false,
    authUser: "",
    balance: 0
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState(state, action) {
            state.authState = action.payload;
        },
        setAuthUser(state, action) {
            state.authUser = action.payload;
        },
        setBalance(state, action){
          state.balance = action.payload;
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth,
                };
            },
        },
    },
});

export const { setAuthState, setAuthUser, setBalance } = authSlice.actions;
export const selectAuthState = (state) => state.auth.authState;
export const selectAuthUser = (state) => state.auth.authUser;
export const selectUserBalance = (state) => state.auth.balance;
export default authSlice.reducer;
