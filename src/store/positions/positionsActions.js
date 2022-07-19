export const ADD_POSITION = 'ADD_POSITION';

export const addPosition = (position) => {
    return {
        type: ADD_POSITION,
        payload: {
            position
        }
    }
};
