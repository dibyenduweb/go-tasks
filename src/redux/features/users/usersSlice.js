import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'dibyendu',
    email:'dibyen@gmail.com',
    userTasks:[],
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}
})

export default userSlice.reducer;