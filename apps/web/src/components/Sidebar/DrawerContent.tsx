import { Box, Divider, List } from '@mui/material';
import BottomContent from './BottomContent';

const DrawerContent = () => {
  return (
    <>
      <List sx={{ height: '100%' }}>
        <Box />
      </List>
      <Divider />
      <BottomContent />
    </>
  );
};

export default DrawerContent;
