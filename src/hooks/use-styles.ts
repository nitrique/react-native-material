import { DependencyList, useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type chroma from 'chroma-js';
import { Theme, useTheme } from '../base/ThemeContext';
import { useSurfaceScale } from './use-surface-scale';
import { useSurfaceColor } from './use-surface-color';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyles = <T extends NamedStyles<T>>(
  factory: (
    utils: Theme & {
      surfaceScale: chroma.Scale<chroma.Color>;
      surfaceColor: chroma.Scale<chroma.Color>;
    }
  ) => T,
  deps?: DependencyList | undefined
): T => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const surfaceColor = useSurfaceColor();

  return useMemo(
    () => factory({ ...theme, surfaceScale, surfaceColor }),
    [factory, theme, surfaceScale, surfaceColor, deps]
  );
};
