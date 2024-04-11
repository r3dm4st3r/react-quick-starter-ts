import { MantineThemeComponents, Tooltip } from '@mantine/core';

export const themeTooltip: MantineThemeComponents = {
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
