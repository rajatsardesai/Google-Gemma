/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['28px', '50px'],
            '4xl': ['48px', '58px'],
            '8xl': ['96px', '106px']
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            colors: {
                'primary': "linear-gradient(48deg, #446EFF 7.06%, #2E96FF 52.22%, #B1C5FF 107.6%, #B1C5FF 107.6%)",
                'color-gray-50': "#f5f5f5",
                'color-gray-100': "#eeeeee",
                'color-gray-200': "#e0e0e0",
                'color-dark-100': "#212121",
                'color-dark-200': "#424242",
                'color-dark-300': "#616161",
                'color-dark-400': "#757575",
            },
            boxShadow: {
                '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
            },
            screens: {
                "wide": "1440px"
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}