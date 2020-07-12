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
            'grey': true
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
            state.colors[action.payload] = !state.colors[action.payload];
        },
        toggleShape(state, action) {
            state.shapes[action.payload] = !state.shapes[action.payload];
        }
    }
})

export const { toggleColor, toggleShape } = filtersSlice.actions

export default filtersSlice.reducer