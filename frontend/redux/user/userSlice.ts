import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    errors: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.errors = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.errors = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;