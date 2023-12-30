import { createTheme, MantineThemeOverride } from "@mantine/core";
import { ThemeComponents } from "@/theme/config/components.ts";
import { ThemeColors } from "@/theme/config/colors.ts";

const theme: MantineThemeOverride = createTheme({
  fontFamily: "var(--base-font)",
  colors: ThemeColors,
  defaultRadius: "sm",
  primaryColor: "theme",
  primaryShade: 7,
  components: ThemeComponents,
});

export default theme;
