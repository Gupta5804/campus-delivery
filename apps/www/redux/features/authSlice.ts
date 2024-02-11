import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user_type: string | '';
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user_type: '',
} as AuthState;

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<{ user_type: string }> ) => {
            state.isAuthenticated = true;
            state.user_type = action.payload?.user_type || state.user_type;
        },
        logout: (state) => {
            state.isAuthenticated = false ; 
            state.user_type = '';
        },
        finishInitialLoad: state => {
            state.isLoading = false;
        },
    }
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
