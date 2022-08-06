import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filtersSlice";
import { positionReducer } from "features/positions/positionsSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devTools: true,
});
