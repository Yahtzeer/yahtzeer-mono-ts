import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0EA5E9',
    },
    secondary: {
      main: '#A78BFA',
    },
    background: {
      default: '#0D1117',
      paper: '#161B22',
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
    },
  },
});

export default responsiveFontSizes(theme);
