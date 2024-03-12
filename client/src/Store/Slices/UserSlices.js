import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userDetails: {},
}

export const UserSlices = createSlice({
    name:"User",
    initialState,
    reducers:{
        userDetailsContainer :(state, action)=>{
            state.userDetails = {...action.payload}

        }

    }
})

export const {userDetailsContainer} = UserSlices.actions;
export default UserSlices.reducer;
export const User = (state)=>state.UserSlices;