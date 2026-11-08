import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwind from "eslint-plugin-tailwindcss";

const config = [
    ...nextCoreWebVitals,
    ...tailwind.configs["flat/recommended"],
    {
        rules: {
            "import/order": [
                "error",
                {
                    alphabetize: {
                        order: "asc",
                    },
                },
            ],
        },
    },
    {
        ignores: [".next/**", "node_modules/**", "functions/**", "*.config.js", "next-env.d.ts"],
    },
];

export default config;
