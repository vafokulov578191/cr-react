import { configureStore } from '@reduxjs/toolkit';
import heroesSlice from './features/heroesSlice';

const store = configureStore({
    reducer: heroesSlice
});

export default store;