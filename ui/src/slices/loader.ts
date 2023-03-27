import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    isLoading: false
}

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setIsLoadingState(state, action) {
            state.isLoading = action.payload;
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.isLoading,
                };
            },
        },
    },
});

export const { setIsLoadingState } = isLoadingSlice.actions;
export const selectIsLoading = (state) => state.isLoading;
export default isLoadingSlice.reducer;
