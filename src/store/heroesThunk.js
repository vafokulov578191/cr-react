import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const { data } = await axios.get('http://localhost:3001/heroes')
        return data
    }
)

export const removeHeroes = createAsyncThunk(
    'heroes/removeHeroes',
    async (id) => {
        const {data} = await axios.delete(`http://localhost:3001/heroes/${id}`)
        return data
    }
)

export const addHeroes = createAsyncThunk(
    'heroes/addHeroes',
    async (user) => {
        console.log(user);
        const {data} = await axios.post('http://localhost:3001/heroes', user)
        return data
    }
)

