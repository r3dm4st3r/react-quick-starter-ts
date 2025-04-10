import { Badge, Chip, MantineThemeComponents } from '@mantine/core';

export const themeBadge: Partial<MantineThemeComponents> = {
  Badge: Badge.extend({
    styles: {
      label: {
        position: 'relative',
        fontWeight: 600,
        textTransform: 'capitalize',
        fontSize: 12
      }
    },
    defaultProps: {
      variant: 'light'
    }
  }),
  Chip: Chip.extend({
    defaultProps: {
      size: 'xl'
    },
    styles: {
      label: {
        fontSize: 14
      }
    }
  })
};
