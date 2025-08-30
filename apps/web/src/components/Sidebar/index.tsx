import { Drawer } from '@mui/material';
import DrawerContent from './DrawerContent';
import MobileSidebar from './Mobile';

type Props = {
  width: number;
  mobileDrawerOpen: boolean;
  closeMobileDrawer: () => void;
};

const Sidebar = ({ width, mobileDrawerOpen, closeMobileDrawer }: Props) => {
  return (
    <>
      <MobileSidebar
        width={width}
        open={mobileDrawerOpen}
        onClose={closeMobileDrawer}
      />
      <Drawer
        variant="permanent"
        sx={{ width: width, display: { xs: 'none', sm: 'block' } }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Sidebar;
