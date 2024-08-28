/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                main: 'rgba(var(--main))',
                card: 'rgba(var(--card))',
                'card-body': 'rgba(var(--card-body))',
                'btn-primary': 'rgba(var(--btn-primary))',
                content: 'rgba(var(--content))',
            },
        },
    },
    plugins: [],
};
