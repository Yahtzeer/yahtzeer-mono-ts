import { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar';

const DRAWER_WIDTH = 150;

const Toolbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const pageName = useMemo(() => {
    const path = pathname === '/' ? 'Home' : pathname.replace('/', '');

    return path.charAt(0).toUpperCase() + path.slice(1);
  }, [pathname]);

  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <MuiToolbar sx={{ ml: { xs: 'none', sm: DRAWER_WIDTH } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ color: 'white' }}>{pageName}</Typography>
        </MuiToolbar>
      </AppBar>
      <Sidebar
        mobileDrawerOpen={mobileDrawerOpen}
        width={DRAWER_WIDTH}
        closeMobileDrawer={() => setMobileDrawerOpen(false)}
      />
    </Box>
  );
};

export default Toolbar;
