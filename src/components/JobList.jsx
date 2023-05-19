import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { usePositions } from '../redux/positions/use-positions';
import { useFetchPositions } from '../redux/positions/use-fetch-positions';

import { addFilter } from '../redux/filters/filter-slice';

const JobList = () => {
  usePositions();
  const allPositions = useFetchPositions();

  console.log(allPositions);

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {allPositions.map((position) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={position.id}
          {...position}
        />
      ))}
    </div>
  );
};

export { JobList };
