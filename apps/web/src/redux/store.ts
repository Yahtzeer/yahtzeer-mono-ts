import { configureStore } from '@reduxjs/toolkit';
import apiService from './serivces';
import notificationsSlice from './slices/notifications';
import { errorMiddleware } from './middlewares';

const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    [notificationsSlice.name]: notificationsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiService.middleware)
      .concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
