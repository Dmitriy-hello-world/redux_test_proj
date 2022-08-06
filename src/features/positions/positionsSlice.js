import { createSlice } from "@reduxjs/toolkit";

const positionsSlice = createSlice({
  name: '@@positions',
  initialState: [],
  reducers: {
    addPositions: (store, action) => {
      store.push(action.payload)
    }
  }
});

export const { addPositions } = positionsSlice.actions;

export const allPositionSelector = (state) => state.positions;

export const filterPositionSelector = (state, filters = []) => {
   if (filters.length === 0) {
    return state.positions;
   }

   return state.positions.filter(pos => {
    const defFiltersArr = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

    return filters.every(filter => {
        return defFiltersArr.includes(filter);
    });
   });
}

export const positionReducer = positionsSlice.reducer;
