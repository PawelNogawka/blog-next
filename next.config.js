/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
  },
  generate: {
    staticPageGenerationTimeout: 60000 
  }
};

module.exports = nextConfig;
