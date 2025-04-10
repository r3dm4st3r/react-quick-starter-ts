import { LoadingOverlay, MantineThemeComponents } from '@mantine/core';

export const themeOverlay: Partial<MantineThemeComponents> = {
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: {
      overlayProps: {
        blur: 3
      }
    }
  })
};
