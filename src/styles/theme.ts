import { createTheme, responsiveFontSizes } from '@mui/material';
// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from '@mui/material/styles';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {
  let theme: Theme = createTheme({
        palette: {
          mode,
          primary: {
            main: "#5cbc63",
            contrastText: "#fff",
          },
          secondary: {
            main: "#000000"
          },
        },
        typography: {
          h3: {
            fontFamily: "CeraPro-Bold",
            color: "#484848",
          },
          h4: {
            fontFamily: "CeraPro-Bold",
            color: "#484848",
          },
          h5: {
            color: "#484848",
          },
          fontFamily:"CeraPro-Regular",
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              rounded: {
                borderRadius: 12,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 700,
              },
              contained: {
                boxShadow: "none",
              },
            },
          },
          MuiFab: {
            styleOverrides: {
              root: {
                boxShadow: "none",
              },
            },
          },
        },
      });
  theme = responsiveFontSizes(theme);
  return theme;
};