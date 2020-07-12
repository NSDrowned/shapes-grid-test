import { createSlice } from '@reduxjs/toolkit'
import shapes from '../data/shapes.json';

const getItemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        getItems: state => shapes.forEach((item) => {
            state.push(item);
        })
    }
})

export const { getItems } = getItemsSlice.actions

export default getItemsSlice.reducer

