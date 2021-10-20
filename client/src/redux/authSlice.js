import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // isLoading:false,
    // isAuth: false,
    // error:"",
    userData:[],
    userInfo:[],
    userName:[],
};

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginLoading:(state) =>{
            state.isLoading = true;
        },
        loginSuccess:(state,action) =>{
            state.isLoading = false;
            state.userData = action.payload;
        },
        loginData:(state,action) =>{
            state.userInfo=action.payload.data;
        },
        loginUsername:(state,action)=>{
            state.userName = action.payload;
        },
        loginError:(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        },

    },
})

export const {loginLoading,loginSuccess,loginData,loginError,loginUsername} = loginSlice.actions


export default loginSlice.reducer