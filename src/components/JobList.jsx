import { useSelector } from 'react-redux';
import { allPositionSelector } from 'store/positions/positionsSelectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const allFilters = useSelector(allPositionSelector);
  console.log(allFilters);
  return (
    <div className='job-list'>
      {allFilters.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList };