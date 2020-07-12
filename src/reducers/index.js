import itemsSlice from '../slices/getItems.js'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items: itemsSlice,
});

export default rootReducer;