/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: [
      "zwin.io"
    ]
  }
}

module.exports = nextConfig
