import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';
import { filterPositionSelector } from './positionsSlice';
import { allFilterSelector, addFilter } from '../filter/filtersSlice';

const JobList = () => {
  const filteredFilters = useSelector(allFilterSelector);
  const filteredPositions = useSelector((state) => filterPositionSelector(state, filteredFilters));
  const dispatch = useDispatch();

  function handleAddFilter(filter) {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {filteredPositions.map(item => (
        <JobPosition 
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList };
