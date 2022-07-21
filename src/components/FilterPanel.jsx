import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { allFilterSelector } from '../store/filter/filter-selectors';
import { removeFilter, clearFilters } from '../store/filter/filter-action';

const FilterPanel = () => {
  const filters = useSelector(allFilterSelector);
  const dispatch = useDispatch();

  if (filters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(item => {
            return (
              <Badge 
                onClear={() => dispatch(removeFilter(item))} 
                variant="clearable"
                key={item}>
                  {item}
              </Badge>
            )  
        })}
        </Stack>

        <button
          className='link'
          onClick={() => dispatch(clearFilters)}
          >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};