import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: true,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignIn: (state) => {
            state.isSignIn = true;
        },
        userSignOut: (state) => {
            state.isSignIn = false;
        }
    },
})

export const {userSignIn,userSignOut } = userSlice.actions;
export default userSlice.reducer;