import { FilterPanel } from 'features/filter/FilterPanel';
import { JobList } from 'features/positions/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPositions } from './features/positions/positionsSlice';

import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(element => {
      dispatch(addPositions(element));
    });
  }, []);

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
