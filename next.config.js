/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/o-usludze',
                destination: '/aboutService',
            },
        ];
    },
};

module.exports = nextConfig;
