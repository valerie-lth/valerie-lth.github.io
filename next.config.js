/** @type {import('next').NextConfig} */
const nextConfig = {}
domains: ["example.domain.com"],
module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://www.valerieliu-th.com/',
            port: '',
            pathname: '/',
          },
        ],
      },
    nextConfig
}
