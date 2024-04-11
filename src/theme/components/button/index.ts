import { Button, MantineThemeComponents } from '@mantine/core';

export const themeButton: MantineThemeComponents = {
  Button: Button.extend({
    defaultProps: {
      size: 'lg',
      variant: 'filled'
    }
  })
};
