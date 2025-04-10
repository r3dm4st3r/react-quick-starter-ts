import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme
} from '@mantine/core';
import { themeComponents } from '@/theme/components';
import { themeColors } from '@/theme/colors.ts';

export const themeOverride: MantineThemeOverride = createTheme({
  fontFamily: 'var(--base-font)',
  colors: themeColors,
  primaryColor: 'theme',
  primaryShade: 7,
  cursorType: 'pointer',
  components: themeComponents
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
