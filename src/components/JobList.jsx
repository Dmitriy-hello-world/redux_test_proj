import { useSelector } from 'react-redux';
import { filterPositionSelector} from 'store/positions/positionsSelectors';
import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';
import { addFilter } from '../store/filter/filter-action';
import { allFilterSelector } from '../store/filter/filter-selectors';

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
