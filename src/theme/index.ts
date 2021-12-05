import { createTheme, ThemeOptions } from "@mui/material";

const theme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffd326",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fbf5e5",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 15px",
          letterSpacing: 2,
          fontSize: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
