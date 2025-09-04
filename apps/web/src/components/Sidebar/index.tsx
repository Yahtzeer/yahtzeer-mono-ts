import { Box, Drawer } from '@mui/material';
import DrawerContent from './DrawerContent';
import MobileSidebar from './Mobile';

type Props = {
  width: number;
  mobileDrawerOpen: boolean;
  closeMobileDrawer: () => void;
};

const Sidebar = ({ width, mobileDrawerOpen, closeMobileDrawer }: Props) => {
  return (
    <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
      <MobileSidebar
        width={width}
        open={mobileDrawerOpen}
        onClose={closeMobileDrawer}
      />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
        }}
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
