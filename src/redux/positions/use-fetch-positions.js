import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './positions-slice';
import { selectFilters } from 'redux/filters/filter-slice';

export const useFetchPositions = () => {
  const currentFilters = useSelector(selectFilters);
  const allPositions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  );
  return allPositions;
};
