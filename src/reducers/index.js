import itemsSlice from '../slices/getItems.js'
import filtersSlice from '../slices/filters.js'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items: itemsSlice,
    filtesr: filtersSlice
});

export default rootReducer;