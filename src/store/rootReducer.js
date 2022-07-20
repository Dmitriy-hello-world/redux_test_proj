import { combineReducers } from "redux";
import { positionReducer } from './positions/positionsReducer'
import { filtersReducer } from './filter/filter-reducer';

const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filtersReducer,
});

export { rootReducer };