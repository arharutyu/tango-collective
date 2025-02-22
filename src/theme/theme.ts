import {ThemeOptions} from '@mui/material/styles';

// Extend TypographyVariants to include 'huge'
declare module '@mui/material/styles' {
    interface TypographyVariants {
        huge: React.CSSProperties;
    }

    // Allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        huge?: React.CSSProperties;
    }
}

// Extend the Typography's `variant` prop
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        huge: true;
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark', // default background is dark
        primary: {
            main: '#3C0008',
        },
        secondary: {
            main: '#f50057',
        },
        text: {
            primary: '#F4F4F4',
            secondary: '#B0B0B0',
        }
    },
    typography: {
        fontFamily: `'Philosopher', 'Times New Roman', serif`,
        allVariants: {
            fontWeight: 400,
        },
        huge: {
            fontSize: '86px',
            fontWeight: 700,
            lineHeight: 1.2,
// @ts-expect-error doesnt recognize @media (min-width:600px)
            '@media (min-width:600px)': {
                fontSize: '60px', // For tablets or small screens
            },
            '@media (min-width:960px)': {
                fontSize: '70px', // For desktops
            },
            '@media (min-width:1280px)': {
                fontSize: '80px', // For large screens
            },
        },
        hero: {
            fontFamily: 'Square Peg , sans-serif',
            fontSize: '128px',
            fontWeight: 400,
            lineHeight: "100px",
            '@media (min-width:600px)': {
                fontSize: '60px', // For tablets or small screens
            },
            '@media (min-width:960px)': {
                fontSize: '70px', // For desktops
            },
            '@media (min-width:1280px)': {
                fontSize: '80px', // For large screens
            },
        },
        h1: {
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '32px',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h5: {
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.3,
        },
        h6: {
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '16px',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '14px',
            lineHeight: 1.43,
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: 500,
            fontFamily: 'Arial, sans-serif',
        },
        subtitle2: {
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Arial, sans-serif',
        },
        caption: {
            fontSize: '12px',
            lineHeight: 1.35,
        },
        overline: {
            fontSize: '10px',
            textTransform: 'uppercase',
            fontWeight: 700,
        },
    },
};