/** @type {import('next').NextConfig} */
const path = require("path");
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
    webpack(config) {
        config.resolve.alias["@components"] = path.join(__dirname, "components");
        config.resolve.alias["@hooks"] = path.join(__dirname, "hooks");
        config.resolve.alias["@lib"] = path.join(__dirname, "lib");
        return config;
    },
    reactStrictMode: true,
});
