import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    allusers:[],
    singuser:[],
    follower:[],
    // following:[]
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        getUsers:(state,action) => {
            state.allusers = action.payload.data;
    },
        getSingUser:(state,action) =>{ 
            state.singuser = action.payload.data.user;
        },
        follows:(state,action) => {
            state.follower = action.payload.data.newUser;
            // state.following = action.payload.data.following;
            // console.log(current(state))
        }
    }
})


export const {getUsers,getSingUser,follows} = userSlice.actions

export default userSlice.reducer