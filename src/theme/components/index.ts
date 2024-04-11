import { MantineThemeComponents } from '@mantine/core';
import { themeButton } from '@/theme/components/button';
import { themeTooltip } from '@/theme/components/tooltip';

export const ThemeComponents: MantineThemeComponents = {
  ...themeButton,
  ...themeTooltip
};
