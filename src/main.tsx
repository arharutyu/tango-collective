import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {themeOptions} from "./theme/theme.ts";

const theme = createTheme({
    ...themeOptions,
});


createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div
            style={{
                // Inject theme colors as CSS variables
                // @ts-expect-error not sure why its complaining, it works
                '--primary-color': theme.palette.primary.main as string,
                '--secondary-color': theme.palette.secondary.main as string,
                '--background-color': theme.palette.background.default as string,
                '--text-primary-color': theme.palette.text.primary as string,
                '--text-secondary-color': theme.palette.text.secondary as string,
            }}
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </div>
    </ThemeProvider>
)
