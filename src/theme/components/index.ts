import { MantineThemeComponents } from '@mantine/core';
import { themeButton } from '@/theme/components/button/ThemeButton.ts';
import { themeInput } from '@/theme/components/input/themeInput.ts';
import { themeBadge } from '@/theme/components/badge/themeBadge.ts';
import { themeDrawer } from '@/theme/components/drawer/themeDrawer.ts';
import { themeModal } from '@/theme/components/modal/ThemeModal.ts';
import { themeTable } from '@/theme/components/table/themeTable.ts';
import { themeTooltip } from '@/theme/components/tooltip/themeTooltip.ts';
import { themeOverlay } from '@/theme/components/overlay/ThemeOverlay.ts';
import { themeSwitch } from '@/theme/components/switch/ThemeSwitch.ts';

export const themeComponents: Partial<MantineThemeComponents> = {
  ...themeButton,
  ...themeInput,
  ...themeBadge,
  ...themeDrawer,
  ...themeModal,
  ...themeTable,
  ...themeTooltip,
  ...themeOverlay,
  ...themeSwitch
};
