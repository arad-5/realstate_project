module.exports = {
    darkMode: 'class',
    content: [
        './layout/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    '0%': { backgroundPositionX: '100%' },
                    '100%': { backgroundPositionX: '400%' },
                },
            },
            animation: {
                shimmer: 'shimmer 3000ms ease infinite',
            },
        },
    },
    plugins: [],
};
