import { ActionIcon, Button, MantineThemeComponents } from "@mantine/core";

export const themeButton: Partial<MantineThemeComponents> = {
  Button: Button.extend({
    defaultProps: {
      size: "md",
      variant: "filled",
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: "ai",
      size: "compact-xs",
    },
    vars: (_theme, props) => {
      if (props.variant === "ai") {
        return {
          root: {
            "--ai-bg": "transparent",
            "--ai-color": "var(--mantine-color-default-color)",
            "--ai-hover": "var(--mantine-color-theme-light)",
            "--ai-hover-color": "var(--mantine-primary-color-filled)",
          },
        };
      }
      return {
        root: {},
      };
    },
  }),
};
