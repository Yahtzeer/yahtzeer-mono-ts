import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  removeNotification,
  selectNotifications,
} from '../../redux/slices/notifications';

const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  if (notifications.length === 0) {
    return null;
  }

  return notifications.map((notification) => (
    <Snackbar
      key={notification.id}
      open
      autoHideDuration={6000}
      onClose={() => dispatch(removeNotification(notification.id))}
    >
      <Alert
        severity={notification.type}
        onClose={() => dispatch(removeNotification(notification.id))}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  ));
};

export default Notifications;
