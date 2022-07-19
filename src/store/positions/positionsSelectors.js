const allPositionSelector = (state) => state.positions;

const filterPositionSelector = (state, filters = []) => {
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

export {allPositionSelector, filterPositionSelector};
