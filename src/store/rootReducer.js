import { combineReducers } from "redux";
import { positionReducer } from './positions/positionsReducer'

const rootReducer = combineReducers({
    positions: positionReducer
});

export { rootReducer };