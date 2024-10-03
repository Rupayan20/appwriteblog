// store.js
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;
=======
import authSlice from './authSlice'; 
const store = configureStore({
    reducer: {
        auth: authSlice, 
        // post: postSlice
    },
});

export default store;
>>>>>>> 2907b88 (Mega project of complex blog)
