import { MantineThemeComponents, Switch } from '@mantine/core';

export const themeSwitch: Partial<MantineThemeComponents> = {
  Switch: Switch.extend({
    defaultProps: {
      display: 'inline-flex'
    }
  })
};
