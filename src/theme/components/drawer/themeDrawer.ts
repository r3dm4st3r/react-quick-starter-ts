import { Drawer, MantineThemeComponents } from '@mantine/core';

export const themeDrawer: Partial<MantineThemeComponents> = {
  Drawer: Drawer.extend({
    defaultProps: {
      size: 'xs'
    }
  })
};
