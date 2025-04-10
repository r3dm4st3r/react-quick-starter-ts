import {
  FileInput,
  InputBase,
  MantineThemeComponents,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Select,
  Textarea,
  TextInput
} from '@mantine/core';

export const themeInput: Partial<MantineThemeComponents> = {
  TextInput: TextInput.extend({
    defaultProps: {
      size: 'md'
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      },
      input: {
        fontSize: 14
      }
    }
  }),
  Textarea: Textarea.extend({
    defaultProps: {
      size: 'md',
      minRows: 5
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      },
      input: {
        fontSize: 14
      }
    }
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      size: 'md'
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      },
      input: {
        fontSize: 14
      }
    }
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      size: 'md',
      prefix: '',
      maxLength: 13,
      clampBehavior: 'strict',
      hideControls: true,
      allowNegative: false,
      allowDecimal: false
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      },
      input: {
        fontSize: 14
      }
    }
  }),
  Select: Select.extend({
    defaultProps: {
      allowDeselect: false,
      checkIconPosition: 'right',
      size: 'md',
      styles: {
        input: { fontSize: 'var(--mantine-font-size-sm)' },
        option: { fontSize: 'var(--mantine-font-size-sm)' }
      }
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      }
    }
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: {
      checkIconPosition: 'right',
      size: 'md',
      styles: {
        input: { fontSize: 'var(--mantine-font-size-sm)' },
        option: { fontSize: 'var(--mantine-font-size-sm)' }
      }
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      }
    }
  }),
  InputBase: InputBase.extend({
    defaultProps: {
      size: 'md',
      styles: {
        input: { fontSize: 'var(--mantine-font-size-sm)' }
      }
    },
    styles: {
      label: {
        fontSize: 14
      }
    }
  }),
  FileInput: FileInput.extend({
    defaultProps: {
      size: 'md'
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14
      },
      input: {
        fontSize: 14
      }
    }
  })
};
