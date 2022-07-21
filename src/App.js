import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPosition } from './store/positions/positionsActions';

import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(element => {
      dispatch(addPosition(element));
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
