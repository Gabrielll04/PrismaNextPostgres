/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{appDir: true},
    webpackDevMiddleware: config => {
        config.watchOptions = {
            pool: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}

module.exports = nextConfig
