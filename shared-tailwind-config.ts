import colors from 'tailwindcss/colors'

export const theme = {
    flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
    },
    fontFamily: {
        sans: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
        primary: {
            DEFAULT: '#3B9B6B',
            contrast: colors.white,
            50: '#F8FCFA',
            100: '#DDF1E6',
            200: '#C5E2CE',
            300: '#A8D7C0',
            400: '#6EC198',
            500: '#47B27A',
            600: '#3B9B6B',
            700: '#398558',
            800: '#327556',
            900: '#265941',
            950: '#163527',
        },
        // STATES
        info: {
            50: colors.blue[50],
            100: colors.blue[100],
            400: colors.blue[400],
            500: colors.blue[500],
            600: colors.blue[600],
        },
        success: {
            50: colors.green[50],
            100: colors.green[100],
            400: colors.green[400],
            500: colors.green[500],
            600: colors.green[600],
        },
        warn: {
            50: colors.amber[50],
            100: colors.amber[100],
            400: colors.amber[400],
            500: colors.amber[500],
            600: colors.amber[600],
        },
        error: {
            50: colors.red[50],
            100: colors.red[100],
            400: colors.red[400],
            500: colors.red[500],
            600: colors.red[600],
        },
    },
}
