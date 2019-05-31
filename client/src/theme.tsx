import { createMuiTheme } from '@material-ui/core';

// Color palette generator: https://material.io/tools/color/#!/
export default createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#e0f7fa',
            dark: '#aec4c7',
            contrastText: '#000000',
        },
        secondary: {
            light: '#a7c0cd',
            main: '#78909c',
            dark: '#4b636e',
            contrastText: '#000000',
        },
    },
});
