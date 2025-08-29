import { Box, Divider, Drawer, List } from '@mui/material';
import BottomContent from './BottomContent';

const DRAWER_WIDTH = 150;

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: DRAWER_WIDTH }}>
      <List sx={{ height: '100%' }}>
        <Box />
      </List>
      <Divider />
      <BottomContent />
    </Drawer>
  );
};

export default Sidebar;
