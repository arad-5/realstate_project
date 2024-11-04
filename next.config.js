/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
        unoptimized: false,
    },
}

module.exports = nextConfig
