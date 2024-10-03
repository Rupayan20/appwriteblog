<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
>>>>>>> 2907b88 (Mega project of complex blog)

const initialState = {
    status: false,
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
<<<<<<< HEAD
        }
    }
})
=======
        },
        /*
        post: (state, action) => {
            state.userData.posts.push(action.payload.post);
            state.status = true;
        }
        */
    },
});
>>>>>>> 2907b88 (Mega project of complex blog)

export const { login, logout } = authSlice.actions;

// Corrected export to "reducer"
export default authSlice.reducer;
