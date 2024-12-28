import "./App.css";
import Router from "./routes/Index.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme/theme.ts";

const theme = createTheme({
  ...themeOptions,
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
