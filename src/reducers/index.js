import itemsSlice from '../slices/getItems.js'
import filtersSlice from '../slices/filters.js'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items: itemsSlice,
    filters: filtersSlice
});

export default rootReducer;