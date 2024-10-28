import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: []
// }

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        addUser: (state,action) =>{
            state = action.payload
            return state
        },
        removeUser: (state,action) =>{            
            return null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions

export default userSlice.reducer