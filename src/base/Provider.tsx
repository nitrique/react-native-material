import React from 'react';
import { SpacingFuncProvider, SpacingFuncProviderProps } from 'react-native-flex-layout';
import { ThemeProvider, ThemeProviderProps } from './ThemeContext';
import { IconComponentProvider, IconComponentProviderProps } from './IconComponentContext';
import { Outlet, PortalProvider } from './PortalContext';

export interface ProviderProps extends ThemeProviderProps, SpacingFuncProviderProps, IconComponentProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ theme, spacingFunc, IconComponent, children }) => (
  <ThemeProvider theme={theme}>
    <SpacingFuncProvider spacingFunc={spacingFunc}>
      <IconComponentProvider IconComponent={IconComponent}>
        <PortalProvider>
          {children}
          <Outlet />
        </PortalProvider>
      </IconComponentProvider>
    </SpacingFuncProvider>
  </ThemeProvider>
);
