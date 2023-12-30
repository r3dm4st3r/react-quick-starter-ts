import { Button, MantineThemeComponents, Tooltip } from '@mantine/core';

export const ThemeComponents: MantineThemeComponents = {
  Button: Button.extend({
    defaultProps: {
      size: 'lg',
      variant: 'filled'
    }
  }),
  Tooltip: Tooltip.extend({
    defaultProps: {
      withArrow: true,
      arrowSize: 10,
      transitionProps: {
        transition: 'pop'
      }
    }
  })
};
