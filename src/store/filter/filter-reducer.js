import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./filter-action"

const filtersReducer = (store = [], action) => {
    switch(action.type) {
        case ADD_FILTER: {
            if (store.includes(action.payload.filter)) {
                return store;
            }
            return [...store, action.payload.filter]
        }
        case REMOVE_FILTER: {
            return store.filter(item => item !== action.payload.filter);
        }
        case CLEAR_FILTERS: {
            return []
        }
        default: {
            return store
        }
    }
};

export { filtersReducer };
