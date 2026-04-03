import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState : { 
        user:null, 
        loading : true,
        isAuthenticated : false
    },
    reducers:{
        setUser:(state, action )=>{
            state.user = action.payload;
            state.loading = false;
            state.isAuthenticated = true;
        },
        logout:(state)=>{
            state.user = null;
            state.loading = false;
            state.isAuthenticated=false;
        }
    }
})

export const {setUser, logout } = authSlice.actions;
export default authSlice.reducer;