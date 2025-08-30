import { Drawer } from '@mui/material';
import DrawerContent from './DrawerContent';

type Props = {
  width?: number;
  open: boolean;
  onClose: () => void;
};

const MobileSidebar = ({ width, open, onClose }: Props) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{ display: { xs: 'block', sm: 'none' }, width }}
      slotProps={{
        root: {
          keepMounted: true,
        },
      }}
    >
      <DrawerContent onClose={onClose} />
    </Drawer>
  );
};

export default MobileSidebar;
