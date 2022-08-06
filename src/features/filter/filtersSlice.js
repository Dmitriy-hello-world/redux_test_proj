import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: '@@filters',
  initialState: [],
  reducers: {
    addFilter: (store, action) => {
      if (!store.includes(action.payload)) {
        store.push(action.payload);  
      }
    },
    removeFilter: (store, action) => {
      return store.filter(item => item !== action.payload);
    },
    clearFilters: (store, action) => []
  }
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;

export const allFilterSelector = (store) => store.filters;

export const filterReducer = filterSlice.reducer;
