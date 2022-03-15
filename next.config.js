/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withImages = require("next-images");

const plugin = [
  {
    nextConfig
  },
  {
    withImages
  },
]

module.exports = plugin;
