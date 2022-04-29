module.exports = {
    mode: "jit",
    purge: {
        content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
        safelist: ["bg-red-200", "bg-red-400", "bg-blue-200", "bg-blue-400", "bg-green-200", "bg-green-400"],
    },

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
            backgroundImage: {
                "app-background": "url('/images/background.svg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
