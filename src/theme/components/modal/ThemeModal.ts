import { MantineThemeComponents, Modal } from '@mantine/core';

export const themeModal: Partial<MantineThemeComponents> = {
  Modal: Modal.extend({
    defaultProps: {
      size: 'md'
    }
  })
};
