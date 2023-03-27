import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    network: "test_mumbai_polygon"
};

export const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        setNetworkState(state, action) {
            state.network = action.payload;
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.network,
                };
            },
        },
    },
});

export const { setNetworkState } = networkSlice.actions;
export const selectNetworkState = (state) => state.network;
export default networkSlice.reducer;
