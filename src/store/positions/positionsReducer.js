import { ADD_POSITION } from "./positionsActions";

const positionReducer = (store = {
    positions: []
}, action) => {
    switch (action) {
        case ADD_POSITION : {
            return {
                ...store,
                positions: action.payload.position,
            }
        }
        default : {
            return store;
        }
    }
};

export { positionReducer };
