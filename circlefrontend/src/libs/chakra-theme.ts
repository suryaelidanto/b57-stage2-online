import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  colors: {
    brand: {
      primary: {
        50: "#E5F6E7",
        100: "#C6EFD5",
        200: "#A1E1A2",
        300: "#7BDB70",
        400: "#04A51E",
        500: "#038A17",
        600: "#027E14",
        700: "#026A11",
        800: "#02560E",
        900: "#024A0C",
      },
      secondary: "#262626",
      outline: "#3F3F3F",
    },
  },
};

export const chakraTheme = extendTheme(theme);
