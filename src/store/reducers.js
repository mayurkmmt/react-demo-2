import { combineReducers } from 'redux';

// reducer import
import eventReducer from './slices/eventSlice';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    events: eventReducer,
});

export default reducer;