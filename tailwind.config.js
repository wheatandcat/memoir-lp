module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    300: "#F9E281",
                    600: "#E3C95D",
                    900: "#D2B849",
                },
                secondary: {
                    300: "#5E5166",
                    600: "#362740",
                    900: "#2B1F32",
                },
                white: {
                    300: "#F2F2F2",
                    600: "#D8D7D6",
                    900: "#B8B8B8",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
