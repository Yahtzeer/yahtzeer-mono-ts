import {
  AppBar,
  IconButton,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Toolbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pageName = useMemo(() => {
    const path = pathname === '/' ? 'Home' : pathname.replace('/', '');

    return path.charAt(0).toUpperCase() + path.slice(1);
  }, [pathname]);

  const isHomePath = pageName === 'Home';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <MuiToolbar sx={{ ml: '150px' }}>
        {!isHomePath ? (
          <IconButton onClick={() => navigate('/')} sx={{ mr: 1 }}>
            <ChevronLeftIcon />
          </IconButton>
        ) : null}
        <Typography sx={{ color: 'white' }}>{pageName}</Typography>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
