import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4169E1",
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;
