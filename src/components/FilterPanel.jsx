import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {
  selectFilters,
  removeFilter,
  clearFilter,
} from '../redux/filters/filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              onClear={() => dispatch(removeFilter(item))}
              key={item}
              variant='clearable'
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter())} className='link'>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
