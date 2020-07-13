import { createSlice } from '@reduxjs/toolkit'

const checkIfAllFalse = (state) => {
    return Object.keys(state).every((k) => !state[k]);
}

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
            if(checkIfAllFalse(state.colors)) { Object.keys(state.colors).forEach(key => state.colors[key] = true) }

        },
        toggleShape(state, action) {
            state.shapes[action.payload] = !state.shapes[action.payload];
            if(checkIfAllFalse(state.shapes)) { Object.keys(state.shapes).forEach(key => state.shapes[key] = true) }
        }
    }
})

export const { toggleColor, toggleShape } = filtersSlice.actions

export default filtersSlice.reducer