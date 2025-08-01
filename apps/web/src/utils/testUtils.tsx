import type React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import theme from './theme';
import type { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
