import { isRejectedWithValue, nanoid, type Middleware } from '@reduxjs/toolkit';
import { addNotification } from './slices/notifications';
import i18n from '../utils/i18n';

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
          message:
            typedPayload.data.message || i18n.t('common.errors.fallback'),
          type: 'error',
        })
      );
    }

    next(action);
  };
