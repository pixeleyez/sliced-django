module.exports = {
    content: [
        "./templates/**/*.{html,js}",
        "./src/**/*.{html,js}",
        "./src/assets/libs/*"
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            fontFamily: {
                cerebri: ["Cerebri Sans", "sans-serif"],
            },
            colors: {
                transperent: "transperent",
                current: "currentColor",
                muted: "#94989a",
                white: "#ffffff",
                light: "#e2e6eb",
                black: "#323a46",
                purple: "#6a69f5",
                success: "#50cd89",
                danger: "#f1416c",
                warning: "#ffc700",
                info: "#009ef7",
                dark: "#151515",
                darklight: "#1F1F1F",
                darkborder: "#343331",
                darkmuted: "#767273",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base", // only generate global styles
        }),
        require("tailwind-scrollbar"),
        require('./plugins/layouts/layouts'),
        require('./plugins/layouts/sidebar'),
        require('./plugins/card'),
        require('./plugins/buttons'),
        require('./plugins/forms'),
        require('./plugins/tables'),
        require('./plugins/plugins/flatpicker'),
        require('./plugins/plugins/apexchart'),
    ],
}