import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        colors: {
            'purple': true,
            'red': true,
            'green': true,
            'blue': true,
            'yellow': true,
            'gray': true
        },
        shapes: {
            'round': true,
            'square': true,
            'triangle': true,
            'oval': true,
            'rectangle': true
        }
    },
    reducers: {
        toggleColor(state, action) {
            console.log(action.payload);
        },
        toggleShape(state, action) {
        }
    }
})

export const { toggleColor, toggleShape } = filtersSlice.actions

export default filtersSlice.reducer