import { createSlice } from "@reduxjs/toolkit";
import { fetchFilter } from "../filtersThunk";
import { fetchHeroes } from "../heroesThunk";


export const Usersslice = createSlice({
    name: 'users',
    initialState: {
        heroes: [],
        filters: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchHeroes.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchHeroes.fulfilled, (state, action) => {
            state.status = 'success'
            state.heroes = action.payload
        })
        .addCase(fetchHeroes.rejected, (state, action) => {
            state.status = 'error'
        })
        builder
        .addCase(fetchFilter.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchFilter.fulfilled, (state, action) => {
            state.status = 'success'
            state.filters = action.payload
        })
        .addCase(fetchFilter.rejected, (state, action) => {
            state.status = 'erro'
        })
    }
})

export default Usersslice.reducer