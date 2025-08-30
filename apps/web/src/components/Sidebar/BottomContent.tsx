import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import apiService from '../../redux/serivces';
import { ReduxTagTypes } from '../../redux/tagTypes';
import { useAppDispatch } from '../../redux/hooks';

type Props = {
  onClose?: () => void;
};

const BottomContent = ({ onClose }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (path: string) => {
    navigate(path);
    onClose?.();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(apiService.util.invalidateTags([ReduxTagTypes.User]));
  };

  return (
    <List>
      <ListItemButton onClick={() => handleClick('/settings')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={t('components.sidebar.settings')} />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={t('components.sidebar.logout')} />
      </ListItemButton>
    </List>
  );
};

export default BottomContent;
