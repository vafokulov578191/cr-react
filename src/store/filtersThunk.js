import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilter = createAsyncThunk(
    'filters/fetchFilter',
    async () => {
        const {data} = await axios.get('http://localhost:3001/filters')
        console.log(data);
        return data
    }
)