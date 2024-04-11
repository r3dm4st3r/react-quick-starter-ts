import { createTheme, MantineThemeOverride } from '@mantine/core';
import { ThemeComponents } from '@/theme/components';
import { ThemeColors } from '@/theme/components/colors.ts';

const theme: MantineThemeOverride = createTheme({
  fontFamily: 'var(--base-font)',
  colors: ThemeColors,
  defaultRadius: 'sm',
  primaryColor: 'theme',
  primaryShade: 7,
  components: ThemeComponents
});

export default theme;
