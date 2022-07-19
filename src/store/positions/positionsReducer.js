import { ADD_POSITION } from "./positionsActions";

const positionReducer = (store = [], action) => {
    switch (action.type) {
        case ADD_POSITION : {
            return [...store, action.payload.position];
        }
        default : {
            return store;
        }
    }
};

export { positionReducer };
