import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    authToken: null,
}

export const authTokenSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        authTokenContainer :(state, action)=>{
            state.authToken = action.payload;

        }

    }
})

export const {authTokenContainer} = authTokenSlice.actions;
export default authTokenSlice.reducer;
export const selectToken = (state) => state.authTokenSlice.authToken;