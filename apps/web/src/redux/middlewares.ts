import { isRejectedWithValue, nanoid, type Middleware } from '@reduxjs/toolkit';
import { addNotification } from './slices/notifications';

export const errorMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const typedPayload = action.payload as {
        data: { message?: string };
        status: number;
      };
      dispatch(
        addNotification({
          id: nanoid(),
          message: typedPayload.data.message || 'An error occurred',
          type: 'error',
        })
      );
    }

    next(action);
  };
