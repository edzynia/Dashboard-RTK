import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filters/filter-slice';
import { positionReducer } from './positions/positions-slice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devTools: true,
});
