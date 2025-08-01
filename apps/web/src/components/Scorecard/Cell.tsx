import { styled } from '@mui/material/styles';
import { TableCell } from '@mui/material';

const Cell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'editable',
})<{ editable?: boolean }>(({ editable, theme }) => ({
  border: '1px solid #ddd',
  '&:hover': {
    backgroundColor: editable ? theme.palette.action.hover : 'inherit',
  },
}));

export default Cell;
