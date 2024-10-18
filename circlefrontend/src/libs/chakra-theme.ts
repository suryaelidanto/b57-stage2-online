import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  colors: {
    brand: {
      background : "#1D1D1D",
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
      secondary: {
        50: "#F2F2F2",
        100: "#D9D9D9",
        200: "#BFBFBF",
        300: "#A6A6A6",
        400: "#8C8C8C",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#262626",
        900: "#0D0D0D",
      },
      outline: "#3F3F3F",
    },
  },
};

export const chakraTheme = extendTheme(theme);
