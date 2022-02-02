/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
    webpack(config, options) {
        config.resolve.alias["@components"] = path.join(__dirname, "components");
        config.resolve.alias["@lib"] = path.join(__dirname, "lib");
        return config;
    },
    reactStrictMode: true,
};
