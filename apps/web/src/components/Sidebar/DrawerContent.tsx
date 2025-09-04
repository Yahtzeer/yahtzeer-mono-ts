import { useNavigate } from 'react-router';
import {
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BottomContent from './BottomContent';

type Props = {
  onClose?: () => void;
};

const DrawerContent = ({ onClose }: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <>
      <Toolbar />
      <Divider />
      <List sx={{ height: '100%' }}>
        <ListItemButton onClick={() => handleClick('/')}>
          <ListItemAvatar>
            <HomeIcon />
          </ListItemAvatar>
          <ListItemText primary="Home" />
        </ListItemButton>
      </List>
      <Divider />
      <BottomContent onClose={onClose} />
    </>
  );
};

export default DrawerContent;
